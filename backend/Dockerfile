FROM python:3.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUBUFFERED 1

WORKDIR /backend

RUN python -m pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

ARG USER_ID
ARG GROUP_ID
RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user
USER user
