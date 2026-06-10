from celery import shared_task
import time
import logging

logger = logging.getLogger(__name__)

@shared_task
def process_hire_me_request(request_id, name, email):
    # Simulate processing time (e.g., sending email or pushing to CRM)
    time.sleep(2)
    logger.info(f"Successfully processed Hire Me Request #{request_id} for {name} ({email})")
    return f"Processed request {request_id}"
