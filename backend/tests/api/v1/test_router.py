def test_get_functionality_rate_by_region(client):
    response = client.get("/api/v1/functionality-rate-by-region")
    assert response.status_code == 200
