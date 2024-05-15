import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div
        className="blog-card testimonial_card "
        style={{
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        }}
      >
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
            }}
          />
          <ul className="details"></ul>
        </div>
        <div className="description testimonial_card">
          <h1 className="text-2xl" style={{ marginBottom: "10px" }}>
            Behind the Login: Access & Refresh Tokens
          </h1>
          <h2
            className="text-xl font-semibold"
            style={{ marginBottom: "10px" }}
          >
            Opening a door to the future
          </h2>
          <h1 style={{ marginBottom: "15px" }}>
            Ever wondered how you stay logged in to apps without constantly
            re-entering your password? It's all thanks to a clever duo: access
            tokens and refresh tokens. Access Tokens: These are like temporary
            keys, granting permission to access specific app features for a
            short period. Expiring tokens enhance security. Refresh Tokens:
            These longer-lived tokens act as backups. When your access token
            expires, the app uses the refresh token to snag a new access token
            from the server, keeping you logged in seamlessly.
          </h1>
          <h1 className="read-more">
            <a href="#">Read More</a>
          </h1>
        </div>
      </div>
      <div
        className="blog-card alt testimonial_card"
        style={{
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        }}
      >
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)",
            }}
          />
          <ul className="details"></ul>
        </div>
        <div className="description testimonial_card">
          <h1 className="text-2xl font-bold " style={{ marginBottom: "10px" }}>
            Express.js: Building Web Apps Made Easy
          </h1>

          <h1>
            Express.js is a popular framework for Node.js that simplifies web
            application development. It provides the tools to handle user
            requests, define routes, and structure your application.
          </h1>
          <h1 className="read-more">
            <a href="#">Read More</a>
          </h1>
        </div>
      </div>
      <div
        className="blog-card testimonial_card"
        style={{
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        }}
      >
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
            }}
          />
          <ul className="details"></ul>
        </div>
        <div className="description testimonial_card">
          <h1 className="text-2xl font-semibold">
            Code Explanations: A General Look
          </h1>
          <br />
          <h1 className="text-lg font-bold mt-2">
            While specific code details depend on your application, here's a
            common breakdown
          </h1>
          <h1>
            {" "}
            <br />
            Setting Up: Importing modules and creating the application instance.
            Routing: Defining URLs that handle user requests (e.g., login, API
            calls). Middleware: Functions that perform tasks before reaching
            routes (e.g., authentication checks). Authentication: Handling
            logins, token generation/verification, and access control. API
            Endpoints: Defining functionality your app provides, ensuring proper
            access control. Error Handling: Implementing mechanisms to
            gracefully handle unexpected situations.
          </h1>
          <h1 className="read-more">
            <a href="#">Read More</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
