import pytest
from ..app import create_app

# Fixture to create a fresh app client for every test
@pytest.fixture
def client():
    app = create_app()
    with app.test_client() as client:
        yield client

def test_create_user_success(client):
    response = client.post('/api/users/create', json={
        "username": "user002",
        "password": "password001",
        "email": "email@002"
    })
    assert response.status_code == 201

def test_create_investor_success(client):
    response = client.post("/api/investors/create", json={
        "user_id": 1,
        "preferences": "[Technology, Music]",
        "risk_tolerance": "High"
    })
    assert response.status_code == 201

def test_create_business_success(client):
    response = client.post("/api/businesses/create", json={
        "user_id": 1,
        "name": "Test Business Name",
        "description": "Test Business Description",
        "industry": "Technology",
        "location": "Columbus, GA"
    })
    assert response.status_code == 201


def test_create_user_failure(client):
    response = client.post('/api/users/create', json={
        "username": "user001",
        "password": "password001"
    })
    assert response.status_code == 400


def test_create_investor_failure(client):
    response = client.post("/api/investors/create", json={
        "user_id": "001",
        "risk_tolerance": "High"
    })
    assert response.status_code == 400


def test_create_business_failure(client):
    response = client.post("/api/businesses/create", json={
        "name": "Test Business Name",
        "description": "Test Business Description",
        "category": "Technology",
        "location": "Columbus, GA"
    })
    assert response.status_code == 400