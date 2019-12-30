---
title: 'Roadmap: Http/Https'
description: Basic information about internet communication protocols
date: '2019-12-30'
image: 'picture.jpg'
tags: ['roadmap','general']
---
Http - Hypertext Transfer Protocol, the foundation of any data exchange on the Web.

#### Http:
1. Communication between web browsers and web servers.
1. HTTP relies on connection-based `TCP/IP (Transmission Control Protocol)` standard. It is a network protocol that lets two hosts connect and exchange data streams.
1. Before a client and server can exchange an HTTP request/response pair, they must establish a TCP connection.
1. `Client-server model` - client opens a connection to make a request, then disconnects and waits to receive a response. 
When the response is ready, the server reopens the connection to send the response. Clients and servers communicate by exchanging individual messages (as opposed to a stream of data).
1. HTTP is a `stateless` protocol. There is no link between two requests being successively carried out on the same connection.
While the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions.
1. `Proxy` - an intermediary for requests from clients seeking resources from servers that provide those resources.
1. Between the client and the server there are intermediaries(proxies), which perform different operations. 
It means that there are more computers between a browser and the server handling the request - for example - routers, modems, proxy servers etc.

#### Https:
1. HTTP protocol version which encrypts all communication between a client and a server using usually SSL/TLS. It makes such communication private and difficult to track.
1. `SSL` - Secure Socket Layer is a cryptographic protocol enhancement to HTTP, which defines how client and server should communicate with each other securely.
1. `TLS` - Transport Layer Security is the successor of SSL. In reality TLS is SSL 3.1 and is used nowadays instead SSL.
1. TLS and SSL uses 2 keys - `public key` to encrypt the communication and `private key` to decrypt it.
1. SSL/TLS certificate works by storing randomly generated keys (public and private) in web server.
1. `Https handshake` - client connects to HTTPS server and receives its certificate
1. Google search engine promotes websites which use HTTPS connection.
1. With HTTPS you can use Service Workers


##### Http methods (most common)
* `GET` - requests data from a resource (http server).
* `POST` - submit new data to the resource.
* `PUT` - update data on the server with request payload
* `DELETE` - delete an existing resource on the resource.


##### HTTP status codes (most common)
* 200 - OK, request worked
* 401 - Unauthorized. Client is not authicenticated.
* 403 - Forbidden. Client is authenticated but not authorized.
* 404 - Not found. The location does not exist
* 500 - Internal server error.


**Resources**:
- https://httpstatuses.com/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- https://whatis.techtarget.com/definition/HTTP-Hypertext-Transfer-Protocol
- https://en.wikipedia.org/wiki/Proxy_server
- https://en.wikipedia.org/wiki/HTTPS
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- https://love2dev.com/blog/how-https-works/

