# Shortcut for running InfoExchange Library

gui:
	cd frontend/infoexchange-library-fe && yarn && yarn run dev

dev:
	python3 -m venv venv && source venv/bin/activate && pip3 install -r requirements.txt && python manage.py runserver

library: gui	dev