# Shortcut for running InfoExchange Library

gui:
	cd frontend/infoexchange-library-fe && yarn && yarn run dev

dev:
	python manage.py runserver

library: gui	dev