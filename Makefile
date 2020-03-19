# Shortcut for running InfoExchange Library

gui:
	cd frontend/infoexchange-library-fe && yarn && yarn run dev

dev:
	python3 -m venv venv && source venv/bin/activate 
	
build:
	pip3 install -r requirements.txt 

migrate:
	python manage.py migrate
	
run:
	python manage.py runserver

library: gui	dev	build	migrate	run