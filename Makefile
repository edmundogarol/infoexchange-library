# Shortcut for running InfoExchange Library

gui:
	cd frontend/infoexchange-library-fe && yarn && yarn run dev

dev:
	python3 -m venv venv && source venv/bin/activate 
	
build:
	pip3 install -r requirements.txt 

migrate:
	python manage.py migrate

loaddata:
	python manage.py loaddata authorsFixture && python manage.py loaddata booksFixture
	
run:
	python manage.py runserver

library: gui	dev	build	migrate	loaddata	run