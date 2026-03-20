# API Documentation

## Overview
This document provides an overview of the API endpoints available in the S-call repository.

## Authentication
All API endpoints require authentication. You can use the following methods:
- Token-based authentication
- OAuth

## Endpoints
### 1. Get User Information
- **Endpoint:** `/api/user`
- **Method:** GET
- **Description:** Returns information about the authenticated user.
- **Response:** 200 OK - Returns user information.

### 2. Create a New Request
- **Endpoint:** `/api/requests`
- **Method:** POST
- **Description:** Creates a new request in the system.
- **Request Body:** `{ "title": "string", "description": "string" }`
- **Response:** 201 Created - Returns the created request details.

### 3. Update a Request
- **Endpoint:** `/api/requests/{id}`
- **Method:** PUT
- **Description:** Updates an existing request.
- **Request Body:** `{ "title": "string", "description": "string" }`
- **Response:** 200 OK - Returns the updated request details.

### 4. Delete a Request
- **Endpoint:** `/api/requests/{id}`
- **Method:** DELETE
- **Description:** Deletes a request by ID.
- **Response:** 204 No Content - Request deleted successfully.

## Error Handling
- **401 Unauthorized:** Authentication failed.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** Server error.

## Examples
### Get User Information
```bash
curl -H "Authorization: Bearer <token>" https://api.example.com/api/user
```

### Create a New Request
```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Request", "description":"Request details."}' https://api.example.com/api/requests
```
