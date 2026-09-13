import logging
from celery import shared_task

logger = logging.getLogger(__name__)


@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def process_hire_me_request(self, request_id, name, email):
    """Process a new hire-me request asynchronously.
    
    This task handles post-submission processing such as sending
    notification emails or pushing data to a CRM system.
    Retries up to 3 times with a 60-second delay on failure.
    """
    try:
        # TODO: Implement actual email sending or CRM integration here
        # Example: send_notification_email(name, email, request_id)
        logger.info(
            "Successfully processed Hire Me Request #%s for %s (%s)",
            request_id, name, email
        )
        return f"Processed request {request_id}"
    except Exception as exc:
        logger.error(
            "Failed to process Hire Me Request #%s for %s (%s): %s",
            request_id, name, email, str(exc)
        )
        raise self.retry(exc=exc)
