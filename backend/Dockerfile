FROM python:3.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUBUFFERED 1

WORKDIR /backend

RUN python -m pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . ./

RUN useradd user
USER user