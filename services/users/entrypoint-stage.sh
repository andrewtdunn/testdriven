#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z users-db 5432; do
    sleep 0.1
done

echo "PostgreSQL started"

echo "Recreate DB"
python manage.py recreate_db
echo "Seed DB"
python manage.py seed_db
gunicorn -b 0.0.0.0:5000 manage:app
