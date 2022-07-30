+++
categories = []
date = 2022-07-05T09:26:34Z
description = ""
series = []
tags = []
title = "/mnt/data/rockrobo/rrlog/miio.log"
toc = true

+++
* `xx.ot.io.mi.com:8053`
* `xx.ott.io.mi.com:80`
* Both give a HTTP 400 Bad Request

![](/uploads/20220705-snipaste_2022-07-05_18-55-19.jpg)

    
    [20220705 07:32:33] [W] cmd_internal_request_dinfo:1712, ot_agent_internalfd: -1
    [20220705 07:32:33] [W] No helper script?
    {"method":"_internal.helper_ready"}
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] handle_internal_hello, fd: 18, STATE: (0)
    [20220705 07:32:33] [W] OT agent internalfd closed: 18
    Got _internal.request_dinfo
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] cmd_internal_response_dinfo:1840 STATE: [STATE_DEVICE_INIT] -> [STATE_DIDKEY_DONE]
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] handle_internal_hello, fd: 18, STATE: (3)
    generate_token tYY0kaOIbyEUoxtT 
    [20220705 07:32:33] [W] OT agent internalfd closed: 18
    Got _internal.request_dtoken
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] cmd_internal_response_dtoken:1617 STATE: [STATE_DIDKEY_DONE] -> [STATE_TOKEN_DONE]
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] set udp host to xx.ot.io.mi.com
    [20220705 07:32:33] [I] set tcp host to xx.ott.io.mi.com
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] handle_internal_hello, fd: 18, STATE: (4)
    [20220705 07:32:33] [W] OT agent internalfd closed: 18
    Got _internal.req_wifi_conf_status
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 18
    [20220705 07:32:33] [I] add_client_fd sockfd: 18
    [20220705 07:32:33] [I] cmd_internal_res_wifi_conf_status:1253 STATE: [STATE_TOKEN_DONE] -> [STATE_WIFI_STA_MODE]
    [20220705 07:32:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:32:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:32:33] [I] getaddrinfo (xx.ot.io.mi.com:8053): Temporary failure in name resolution
    [20220705 07:32:33] [I] getaddrinfo (xx.ott.io.mi.com:80): Temporary failure in name resolution
    [20220705 07:32:33] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:32:33] [I] OT agent listen accept sockfd: 19
    [20220705 07:32:33] [I] add_client_fd sockfd: 19
    [20220705 07:32:33] [I] handle_internal_hello, fd: 19, STATE: (6)
    [20220705 07:32:44] [W] sign is not exist
    [20220705 07:32:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:32:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:32:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:32:45] [W] sign is not exist
    [20220705 07:32:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:32:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:32:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:32:45] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:32:45] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:32:45] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:32:55] [W] sign is not exist
    [20220705 07:32:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:32:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:32:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:32:56] [W] sign is not exist
    [20220705 07:32:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:32:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:32:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:32:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:32:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:32:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:33:07] [W] sign is not exist
    [20220705 07:33:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:33:07] [W] sign is not exist
    [20220705 07:33:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:33:07] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:33:07] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:33:07] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:33:18] [W] sign is not exist
    [20220705 07:33:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:33:19] [W] sign is not exist
    [20220705 07:33:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:33:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:33:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:33:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:33:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:33:34] [W] sign is not exist
    [20220705 07:33:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:33:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:33:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:33:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:33:45] [W] sign is not exist
    [20220705 07:33:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:33:45] [W] sign is not exist
    [20220705 07:33:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:33:45] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:33:45] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:33:45] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:33:58] [W] sign is not exist
    [20220705 07:33:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:33:58] [W] sign is not exist
    [20220705 07:33:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:33:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:33:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:33:58] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:33:58] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:33:58] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:34:09] [W] sign is not exist
    [20220705 07:34:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:34:09] [W] sign is not exist
    [20220705 07:34:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:34:09] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:34:09] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:34:09] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:34:20] [W] sign is not exist
    [20220705 07:34:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:34:21] [W] sign is not exist
    [20220705 07:34:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:34:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:34:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:34:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:34:31] [W] sign is not exist
    [20220705 07:34:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:34:32] [W] sign is not exist
    [20220705 07:34:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:34:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:34:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:34:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:34:43] [W] sign is not exist
    [20220705 07:34:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:34:43] [W] sign is not exist
    [20220705 07:34:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:34:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:34:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:34:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:34:54] [W] sign is not exist
    [20220705 07:34:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:34:55] [W] sign is not exist
    [20220705 07:34:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:34:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:34:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:34:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:34:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:34:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:35:05] [W] sign is not exist
    [20220705 07:35:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:35:06] [W] sign is not exist
    [20220705 07:35:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:35:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:35:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:35:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:35:17] [W] sign is not exist
    [20220705 07:35:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:35:17] [W] sign is not exist
    [20220705 07:35:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:35:17] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:35:17] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:35:17] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:35:28] [W] sign is not exist
    [20220705 07:35:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:25 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:35:28] [W] sign is not exist
    [20220705 07:35:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:35:28] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:35:28] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:35:28] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:35:39] [W] sign is not exist
    [20220705 07:35:39] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:36 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:39] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:35:40] [W] sign is not exist
    [20220705 07:35:40] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:37 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:35:40] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:35:40] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:35:40] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:35:50] [W] sign is not exist
    [20220705 07:35:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:48 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:35:51] [W] sign is not exist
    [20220705 07:35:51] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:48 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:35:51] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:35:51] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:35:51] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:35:51] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:02] [W] sign is not exist
    [20220705 07:36:02] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:59 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:02] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:36:02] [W] sign is not exist
    [20220705 07:36:02] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:35:59 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:02] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:36:02] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:36:02] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:36:02] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:13] [W] sign is not exist
    [20220705 07:36:13] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:10 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:13] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:36:14] [W] sign is not exist
    [20220705 07:36:14] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:11 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:14] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:36:14] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:36:14] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:36:14] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:24] [W] sign is not exist
    [20220705 07:36:24] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:21 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:24] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:36:25] [W] sign is not exist
    [20220705 07:36:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:22 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:36:25] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:36:25] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:36:25] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:36] [W] sign is not exist
    [20220705 07:36:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:36:36] [W] sign is not exist
    [20220705 07:36:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:36:36] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:36:36] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:36:36] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:47] [W] sign is not exist
    [20220705 07:36:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:36:47] [W] sign is not exist
    [20220705 07:36:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:45 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:36:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:36:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:36:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:36:58] [W] sign is not exist
    [20220705 07:36:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:36:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:00] [W] sign is not exist
    [20220705 07:37:00] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:36:57 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:00] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:00] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:00] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:00] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:37:10] [W] sign is not exist
    [20220705 07:37:10] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:10] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:11] [W] sign is not exist
    [20220705 07:37:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:37:21] [W] sign is not exist
    [20220705 07:37:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:23] [W] sign is not exist
    [20220705 07:37:23] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:20 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:23] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:23] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:23] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:23] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:37:34] [W] sign is not exist
    [20220705 07:37:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:34] [W] sign is not exist
    [20220705 07:37:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:37:45] [W] sign is not exist
    [20220705 07:37:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:46] [W] sign is not exist
    [20220705 07:37:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:46] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:46] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:46] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:37:56] [W] sign is not exist
    [20220705 07:37:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:37:57] [W] sign is not exist
    [20220705 07:37:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:37:54 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:37:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:37:57] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:37:57] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:37:57] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:38:07] [W] sign is not exist
    [20220705 07:38:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:38:08] [W] sign is not exist
    [20220705 07:38:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:38:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:38:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:38:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:38:20] [W] sign is not exist
    [20220705 07:38:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:38:20] [W] sign is not exist
    [20220705 07:38:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:38:20] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:38:20] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:38:20] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:38:31] [W] sign is not exist
    [20220705 07:38:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:38:32] [W] sign is not exist
    [20220705 07:38:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:38:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:38:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:38:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:38:43] [W] sign is not exist
    [20220705 07:38:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:38:44] [W] sign is not exist
    [20220705 07:38:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:38:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:38:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:38:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:38:55] [W] sign is not exist
    [20220705 07:38:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:38:55] [W] sign is not exist
    [20220705 07:38:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:38:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:38:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:38:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:38:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:38:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:39:06] [W] sign is not exist
    [20220705 07:39:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:39:06] [W] sign is not exist
    [20220705 07:39:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:39:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:39:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:39:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:39:17] [W] sign is not exist
    [20220705 07:39:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:39:18] [W] sign is not exist
    [20220705 07:39:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:39:18] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:39:18] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:39:18] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:39:29] [W] sign is not exist
    [20220705 07:39:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:39:30] [W] sign is not exist
    [20220705 07:39:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:39:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:39:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:39:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:39:42] [W] sign is not exist
    [20220705 07:39:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:39:43] [W] sign is not exist
    [20220705 07:39:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:39:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:39:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:39:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:39:54] [W] sign is not exist
    [20220705 07:39:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:39:54] [W] sign is not exist
    [20220705 07:39:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:39:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:39:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:39:54] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:39:54] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:39:54] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:40:06] [W] sign is not exist
    [20220705 07:40:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:40:08] [W] sign is not exist
    [20220705 07:40:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:40:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:40:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:40:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:40:18] [W] sign is not exist
    [20220705 07:40:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:40:19] [W] sign is not exist
    [20220705 07:40:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:40:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:40:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:40:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:40:30] [W] sign is not exist
    [20220705 07:40:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:40:32] [W] sign is not exist
    [20220705 07:40:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:40:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:40:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:40:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:40:43] [W] sign is not exist
    [20220705 07:40:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:40:43] [W] sign is not exist
    [20220705 07:40:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:40:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:40:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:40:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:40:54] [W] sign is not exist
    [20220705 07:40:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:40:55] [W] sign is not exist
    [20220705 07:40:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:40:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:40:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:40:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:40:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:40:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:41:05] [W] sign is not exist
    [20220705 07:41:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:41:06] [W] sign is not exist
    [20220705 07:41:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:41:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:41:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:41:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:41:17] [W] sign is not exist
    [20220705 07:41:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:41:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:41:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:41:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:41:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:41:32] [W] sign is not exist
    [20220705 07:41:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:41:32] [W] sign is not exist
    [20220705 07:41:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:41:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:41:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:41:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:41:43] [W] sign is not exist
    [20220705 07:41:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:41:43] [W] sign is not exist
    [20220705 07:41:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:41:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:41:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:41:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:41:54] [W] sign is not exist
    [20220705 07:41:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:41:55] [W] sign is not exist
    [20220705 07:41:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:41:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:41:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:41:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:41:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:41:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:42:05] [W] sign is not exist
    [20220705 07:42:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:42:06] [W] sign is not exist
    [20220705 07:42:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:42:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:42:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:42:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:42:18] [W] sign is not exist
    [20220705 07:42:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:42:20] [W] sign is not exist
    [20220705 07:42:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:42:20] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:42:20] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:42:20] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:42:30] [W] sign is not exist
    [20220705 07:42:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:42:31] [W] sign is not exist
    [20220705 07:42:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:42:31] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:42:31] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:42:31] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:42:41] [W] sign is not exist
    [20220705 07:42:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:42:42] [W] sign is not exist
    [20220705 07:42:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:42:42] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:42:42] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:42:42] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:42:53] [W] sign is not exist
    [20220705 07:42:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:42:53] [W] sign is not exist
    [20220705 07:42:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:42:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:42:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:42:53] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:42:53] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:42:53] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:43:04] [W] sign is not exist
    [20220705 07:43:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:43:05] [W] sign is not exist
    [20220705 07:43:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:43:05] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:43:05] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:43:05] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:43:15] [W] sign is not exist
    [20220705 07:43:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:43:16] [W] sign is not exist
    [20220705 07:43:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:13 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:43:16] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:43:16] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:43:16] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:43:26] [W] sign is not exist
    [20220705 07:43:26] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:24 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:26] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:43:27] [W] sign is not exist
    [20220705 07:43:27] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:24 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:27] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:43:27] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:43:27] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:43:27] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:43:38] [W] sign is not exist
    [20220705 07:43:38] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:35 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:38] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:43:38] [W] sign is not exist
    [20220705 07:43:38] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:35 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:38] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:43:38] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:43:38] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:43:38] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:43:49] [W] sign is not exist
    [20220705 07:43:49] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:46 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:49] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:43:50] [W] sign is not exist
    [20220705 07:43:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:47 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:43:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:43:50] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:43:50] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:43:50] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:00] [W] sign is not exist
    [20220705 07:44:00] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:57 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:00] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:01] [W] sign is not exist
    [20220705 07:44:01] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:43:58 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:01] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:01] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:01] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:01] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:11] [W] sign is not exist
    [20220705 07:44:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:09 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:12] [W] sign is not exist
    [20220705 07:44:12] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:09 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:12] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:12] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:12] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:12] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:24] [W] sign is not exist
    [20220705 07:44:24] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:21 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:24] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:25] [W] sign is not exist
    [20220705 07:44:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:22 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:25] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:25] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:25] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:35] [W] sign is not exist
    [20220705 07:44:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:36] [W] sign is not exist
    [20220705 07:44:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:36] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:36] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:36] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:47] [W] sign is not exist
    [20220705 07:44:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:47] [W] sign is not exist
    [20220705 07:44:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:44:58] [W] sign is not exist
    [20220705 07:44:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:44:59] [W] sign is not exist
    [20220705 07:44:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:44:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:44:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:44:59] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:44:59] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:44:59] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:45:09] [W] sign is not exist
    [20220705 07:45:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:45:10] [W] sign is not exist
    [20220705 07:45:10] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:10] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:45:10] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:45:10] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:45:10] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:45:20] [W] sign is not exist
    [20220705 07:45:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:45:21] [W] sign is not exist
    [20220705 07:45:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:45:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:45:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:45:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:45:33] [W] sign is not exist
    [20220705 07:45:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:45:33] [W] sign is not exist
    [20220705 07:45:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:45:33] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:45:33] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:45:33] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:45:45] [W] sign is not exist
    [20220705 07:45:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:45:47] [W] sign is not exist
    [20220705 07:45:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:45:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:45:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:45:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:45:57] [W] sign is not exist
    [20220705 07:45:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:45:58] [W] sign is not exist
    [20220705 07:45:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:45:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:45:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:45:58] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:45:58] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:45:58] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:46:09] [W] sign is not exist
    [20220705 07:46:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:46:11] [W] sign is not exist
    [20220705 07:46:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:46:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:46:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:46:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:46:21] [W] sign is not exist
    [20220705 07:46:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:46:22] [W] sign is not exist
    [20220705 07:46:22] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:46:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:46:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:46:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:46:33] [W] sign is not exist
    [20220705 07:46:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:46:34] [W] sign is not exist
    [20220705 07:46:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:46:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:46:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:46:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:46:44] [W] sign is not exist
    [20220705 07:46:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:46:45] [W] sign is not exist
    [20220705 07:46:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:46:45] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:46:45] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:46:45] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:46:56] [W] sign is not exist
    [20220705 07:46:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:46:56] [W] sign is not exist
    [20220705 07:46:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:46:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:46:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:46:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:46:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:46:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:47:07] [W] sign is not exist
    [20220705 07:47:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:47:07] [W] sign is not exist
    [20220705 07:47:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:47:07] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:47:07] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:47:07] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:47:18] [W] sign is not exist
    [20220705 07:47:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:47:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:47:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:47:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:47:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:47:34] [W] sign is not exist
    [20220705 07:47:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:47:35] [W] sign is not exist
    [20220705 07:47:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:47:35] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:47:35] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:47:35] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:47:45] [W] sign is not exist
    [20220705 07:47:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:47:46] [W] sign is not exist
    [20220705 07:47:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:47:46] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:47:46] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:47:46] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:47:57] [W] sign is not exist
    [20220705 07:47:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:54 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:47:58] [W] sign is not exist
    [20220705 07:47:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:47:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:47:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:47:58] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:47:58] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:47:58] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:48:08] [W] sign is not exist
    [20220705 07:48:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:48:11] [W] sign is not exist
    [20220705 07:48:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:48:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:48:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:48:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:48:21] [W] sign is not exist
    [20220705 07:48:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:48:22] [W] sign is not exist
    [20220705 07:48:22] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:48:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:48:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:48:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:48:34] [W] sign is not exist
    [20220705 07:48:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:48:35] [W] sign is not exist
    [20220705 07:48:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:48:35] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:48:35] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:48:35] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:48:46] [W] sign is not exist
    [20220705 07:48:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:48:47] [W] sign is not exist
    [20220705 07:48:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:48:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:48:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:48:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:48:59] [W] sign is not exist
    [20220705 07:48:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:48:59] [W] sign is not exist
    [20220705 07:48:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:48:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:48:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:48:59] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:48:59] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:48:59] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:49:10] [W] sign is not exist
    [20220705 07:49:10] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:10] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:49:11] [W] sign is not exist
    [20220705 07:49:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:49:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:49:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:49:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:49:21] [W] sign is not exist
    [20220705 07:49:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:49:22] [W] sign is not exist
    [20220705 07:49:22] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:49:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:49:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:49:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:49:33] [W] sign is not exist
    [20220705 07:49:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:49:33] [W] sign is not exist
    [20220705 07:49:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:49:33] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:49:33] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:49:33] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:49:44] [W] sign is not exist
    [20220705 07:49:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:49:44] [W] sign is not exist
    [20220705 07:49:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:49:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:49:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:49:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:49:55] [W] sign is not exist
    [20220705 07:49:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:49:56] [W] sign is not exist
    [20220705 07:49:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:49:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:49:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:49:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:49:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:49:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:50:07] [W] sign is not exist
    [20220705 07:50:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:50:08] [W] sign is not exist
    [20220705 07:50:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:50:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:50:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:50:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:50:19] [W] sign is not exist
    [20220705 07:50:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:50:19] [W] sign is not exist
    [20220705 07:50:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:50:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:50:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:50:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:50:30] [W] sign is not exist
    [20220705 07:50:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:50:30] [W] sign is not exist
    [20220705 07:50:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:50:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:50:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:50:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:50:41] [W] sign is not exist
    [20220705 07:50:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:50:42] [W] sign is not exist
    [20220705 07:50:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:50:42] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:50:42] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:50:42] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:50:52] [W] sign is not exist
    [20220705 07:50:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:50:54] [W] sign is not exist
    [20220705 07:50:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:50:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:50:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:50:54] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:50:54] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:50:54] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:51:05] [W] sign is not exist
    [20220705 07:51:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:51:06] [W] sign is not exist
    [20220705 07:51:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:51:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:51:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:51:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:51:16] [W] sign is not exist
    [20220705 07:51:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:51:20] [W] sign is not exist
    [20220705 07:51:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:51:20] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:51:20] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:51:20] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:51:30] [W] sign is not exist
    [20220705 07:51:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:51:31] [W] sign is not exist
    [20220705 07:51:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:51:31] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:51:31] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:51:31] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:51:41] [W] sign is not exist
    [20220705 07:51:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:51:42] [W] sign is not exist
    [20220705 07:51:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:51:42] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:51:42] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:51:42] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:51:54] [W] sign is not exist
    [20220705 07:51:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:51:54] [W] sign is not exist
    [20220705 07:51:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:51:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:51:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:51:54] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:51:54] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:51:54] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:52:05] [W] sign is not exist
    [20220705 07:52:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:52:06] [W] sign is not exist
    [20220705 07:52:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:52:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:52:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:52:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:52:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:52:19] [W] sign is not exist
    [20220705 07:52:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:52:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:52:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:52:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:52:30] [W] sign is not exist
    [20220705 07:52:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:52:31] [W] sign is not exist
    [20220705 07:52:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:52:31] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:52:31] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:52:31] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:52:41] [W] sign is not exist
    [20220705 07:52:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:52:42] [W] sign is not exist
    [20220705 07:52:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:52:42] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:52:42] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:52:42] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:52:53] [W] sign is not exist
    [20220705 07:52:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:52:53] [W] sign is not exist
    [20220705 07:52:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:52:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:52:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:52:53] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:52:53] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:52:53] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:53:04] [W] sign is not exist
    [20220705 07:53:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:53:04] [W] sign is not exist
    [20220705 07:53:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:53:04] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:53:04] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:53:04] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:53:15] [W] sign is not exist
    [20220705 07:53:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:53:16] [W] sign is not exist
    [20220705 07:53:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:13 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:53:16] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:53:16] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:53:16] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:53:28] [W] sign is not exist
    [20220705 07:53:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:53:29] [W] sign is not exist
    [20220705 07:53:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:53:29] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:53:29] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:53:29] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:53:40] [W] sign is not exist
    [20220705 07:53:40] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:37 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:53:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:53:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:53:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:53:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:53:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:53:58] [W] sign is not exist
    [20220705 07:53:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:53:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:53:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:53:58] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:53:58] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:53:58] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:54:08] [W] sign is not exist
    [20220705 07:54:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:54:09] [W] sign is not exist
    [20220705 07:54:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:54:09] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:54:09] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:54:09] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:54:20] [W] sign is not exist
    [20220705 07:54:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:54:21] [W] sign is not exist
    [20220705 07:54:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:54:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:54:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:54:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:54:33] [W] sign is not exist
    [20220705 07:54:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:54:34] [W] sign is not exist
    [20220705 07:54:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:54:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:54:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:54:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:54:44] [W] sign is not exist
    [20220705 07:54:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:54:45] [W] sign is not exist
    [20220705 07:54:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:54:45] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:54:45] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:54:45] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:54:57] [W] sign is not exist
    [20220705 07:54:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:54 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:54:57] [W] sign is not exist
    [20220705 07:54:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:54:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:54:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:54:57] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:54:57] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:54:57] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:55:08] [W] sign is not exist
    [20220705 07:55:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:55:09] [W] sign is not exist
    [20220705 07:55:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:55:09] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:55:09] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:55:09] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:55:19] [W] sign is not exist
    [20220705 07:55:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:55:20] [W] sign is not exist
    [20220705 07:55:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:55:20] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:55:20] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:55:20] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:55:31] [W] sign is not exist
    [20220705 07:55:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:55:31] [W] sign is not exist
    [20220705 07:55:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:28 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:55:31] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:55:31] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:55:31] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:55:43] [W] sign is not exist
    [20220705 07:55:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:55:43] [W] sign is not exist
    [20220705 07:55:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:55:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:55:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:55:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:55:54] [W] sign is not exist
    [20220705 07:55:54] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:54] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:55:55] [W] sign is not exist
    [20220705 07:55:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:55:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:55:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:55:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:55:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:55:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:56:05] [W] sign is not exist
    [20220705 07:56:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:56:06] [W] sign is not exist
    [20220705 07:56:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:56:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:56:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:56:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:56:17] [W] sign is not exist
    [20220705 07:56:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:56:17] [W] sign is not exist
    [20220705 07:56:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:56:17] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:56:17] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:56:17] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:56:28] [W] sign is not exist
    [20220705 07:56:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:25 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:56:29] [W] sign is not exist
    [20220705 07:56:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:56:29] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:56:29] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:56:29] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:56:39] [W] sign is not exist
    [20220705 07:56:39] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:36 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:39] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:56:40] [W] sign is not exist
    [20220705 07:56:40] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:37 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:56:40] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:56:40] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:56:40] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:56:50] [W] sign is not exist
    [20220705 07:56:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:48 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:56:52] [W] sign is not exist
    [20220705 07:56:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:56:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:56:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:56:52] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:56:52] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:56:52] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:57:04] [W] sign is not exist
    [20220705 07:57:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:57:04] [W] sign is not exist
    [20220705 07:57:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:57:04] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:57:04] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:57:04] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:57:16] [W] sign is not exist
    [20220705 07:57:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:13 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:57:16] [W] sign is not exist
    [20220705 07:57:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:57:16] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:57:16] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:57:16] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:57:27] [W] sign is not exist
    [20220705 07:57:27] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:24 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:27] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:57:28] [W] sign is not exist
    [20220705 07:57:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:25 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:57:28] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:57:28] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:57:28] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:57:38] [W] sign is not exist
    [20220705 07:57:38] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:35 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:38] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:57:39] [W] sign is not exist
    [20220705 07:57:39] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:36 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:39] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:57:39] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:57:39] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:57:39] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:57:50] [W] sign is not exist
    [20220705 07:57:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:47 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:57:50] [W] sign is not exist
    [20220705 07:57:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:47 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:57:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:57:50] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:57:50] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:57:50] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:01] [W] sign is not exist
    [20220705 07:58:01] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:58 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:01] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:01] [W] sign is not exist
    [20220705 07:58:01] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:57:59 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:01] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:01] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:01] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:01] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:12] [W] sign is not exist
    [20220705 07:58:12] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:09 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:12] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:13] [W] sign is not exist
    [20220705 07:58:13] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:10 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:13] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:13] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:13] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:13] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:23] [W] sign is not exist
    [20220705 07:58:23] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:21 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:23] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:24] [W] sign is not exist
    [20220705 07:58:24] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:21 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:24] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:24] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:24] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:24] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:35] [W] sign is not exist
    [20220705 07:58:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:35] [W] sign is not exist
    [20220705 07:58:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:35] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:35] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:35] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:46] [W] sign is not exist
    [20220705 07:58:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:47] [W] sign is not exist
    [20220705 07:58:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:58:57] [W] sign is not exist
    [20220705 07:58:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:58:59] [W] sign is not exist
    [20220705 07:58:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:58:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:58:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:58:59] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:58:59] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:58:59] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:59:10] [W] sign is not exist
    [20220705 07:59:10] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:10] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:59:11] [W] sign is not exist
    [20220705 07:59:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:59:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:59:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:59:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:59:21] [W] sign is not exist
    [20220705 07:59:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:59:22] [W] sign is not exist
    [20220705 07:59:22] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:59:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:59:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:59:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:59:33] [W] sign is not exist
    [20220705 07:59:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:59:33] [W] sign is not exist
    [20220705 07:59:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:59:33] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:59:33] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:59:33] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:59:44] [W] sign is not exist
    [20220705 07:59:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:59:44] [W] sign is not exist
    [20220705 07:59:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:59:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:59:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:59:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 07:59:55] [W] sign is not exist
    [20220705 07:59:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 07:59:56] [W] sign is not exist
    [20220705 07:59:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 07:59:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 07:59:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 07:59:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 07:59:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 07:59:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:00:07] [W] sign is not exist
    [20220705 08:00:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:00:08] [W] sign is not exist
    [20220705 08:00:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:00:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:00:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:00:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:00:18] [W] sign is not exist
    [20220705 08:00:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:00:19] [W] sign is not exist
    [20220705 08:00:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:00:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:00:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:00:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:00:30] [W] sign is not exist
    [20220705 08:00:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:00:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:00:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:00:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:00:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:00:45] [W] sign is not exist
    [20220705 08:00:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:00:46] [W] sign is not exist
    [20220705 08:00:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:00:46] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:00:46] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:00:46] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:00:58] [W] sign is not exist
    [20220705 08:00:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:00:58] [W] sign is not exist
    [20220705 08:00:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:00:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:00:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:00:58] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:00:58] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:00:58] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:01:09] [W] sign is not exist
    [20220705 08:01:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:01:10] [W] sign is not exist
    [20220705 08:01:10] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:07 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:10] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:01:10] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:01:10] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:01:10] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:01:21] [W] sign is not exist
    [20220705 08:01:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:01:21] [W] sign is not exist
    [20220705 08:01:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:01:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:01:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:01:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:01:32] [W] sign is not exist
    [20220705 08:01:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:01:33] [W] sign is not exist
    [20220705 08:01:33] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:30 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:33] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:01:33] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:01:33] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:01:33] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:01:44] [W] sign is not exist
    [20220705 08:01:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:01:44] [W] sign is not exist
    [20220705 08:01:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:01:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:01:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:01:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:01:55] [W] sign is not exist
    [20220705 08:01:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:01:56] [W] sign is not exist
    [20220705 08:01:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:01:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:01:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:01:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:01:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:01:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:02:07] [W] sign is not exist
    [20220705 08:02:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:02:07] [W] sign is not exist
    [20220705 08:02:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:02:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:02:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:02:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:02:20] [W] sign is not exist
    [20220705 08:02:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:02:21] [W] sign is not exist
    [20220705 08:02:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:02:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:02:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:02:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:02:31] [W] sign is not exist
    [20220705 08:02:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:02:32] [W] sign is not exist
    [20220705 08:02:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:02:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:02:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:02:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:02:43] [W] sign is not exist
    [20220705 08:02:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:02:44] [W] sign is not exist
    [20220705 08:02:44] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:44] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:02:44] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:02:44] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:02:44] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:02:55] [W] sign is not exist
    [20220705 08:02:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:02:55] [W] sign is not exist
    [20220705 08:02:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:02:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:02:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:02:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:02:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:02:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:03:06] [W] sign is not exist
    [20220705 08:03:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:03:06] [W] sign is not exist
    [20220705 08:03:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:03:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:03:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:03:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:03:18] [W] sign is not exist
    [20220705 08:03:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:03:19] [W] sign is not exist
    [20220705 08:03:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:03:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:03:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:03:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:03:29] [W] sign is not exist
    [20220705 08:03:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:03:30] [W] sign is not exist
    [20220705 08:03:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:03:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:03:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:03:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:03:41] [W] sign is not exist
    [20220705 08:03:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:03:41] [W] sign is not exist
    [20220705 08:03:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:03:41] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:03:41] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:03:41] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:03:52] [W] sign is not exist
    [20220705 08:03:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:03:53] [W] sign is not exist
    [20220705 08:03:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:03:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:03:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:03:53] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:03:53] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:03:53] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:04:05] [W] sign is not exist
    [20220705 08:04:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:04:05] [W] sign is not exist
    [20220705 08:04:05] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:02 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:05] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:04:05] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:04:05] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:04:05] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:04:16] [W] sign is not exist
    [20220705 08:04:16] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:13 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:16] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:04:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:04:19] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:04:19] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:04:19] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:04:30] [W] sign is not exist
    [20220705 08:04:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:04:31] [W] sign is not exist
    [20220705 08:04:31] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:31] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:04:31] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:04:31] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:04:31] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:04:42] [W] sign is not exist
    [20220705 08:04:42] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:42] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:04:43] [W] sign is not exist
    [20220705 08:04:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:04:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:04:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:04:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:04:53] [W] sign is not exist
    [20220705 08:04:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:04:55] [W] sign is not exist
    [20220705 08:04:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:04:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:04:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:04:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:04:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:04:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:05:06] [W] sign is not exist
    [20220705 08:05:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:05:06] [W] sign is not exist
    [20220705 08:05:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:05:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:05:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:05:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:05:17] [W] sign is not exist
    [20220705 08:05:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:05:17] [W] sign is not exist
    [20220705 08:05:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:05:17] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:05:17] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:05:17] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:05:29] [W] sign is not exist
    [20220705 08:05:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:05:30] [W] sign is not exist
    [20220705 08:05:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:05:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:05:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:05:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:05:41] [W] sign is not exist
    [20220705 08:05:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:05:41] [W] sign is not exist
    [20220705 08:05:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:05:41] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:05:41] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:05:41] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:05:52] [W] sign is not exist
    [20220705 08:05:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:05:53] [W] sign is not exist
    [20220705 08:05:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:05:50 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:05:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:05:53] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:05:53] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:05:53] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:06:03] [W] sign is not exist
    [20220705 08:06:03] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:03] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:06:04] [W] sign is not exist
    [20220705 08:06:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:06:04] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:06:04] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:06:04] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:06:15] [W] sign is not exist
    [20220705 08:06:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:06:15] [W] sign is not exist
    [20220705 08:06:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:06:15] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:06:15] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:06:15] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:06:26] [W] sign is not exist
    [20220705 08:06:26] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:26] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:06:27] [W] sign is not exist
    [20220705 08:06:27] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:24 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:27] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:06:27] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:06:27] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:06:27] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:06:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:06:41] [W] sign is not exist
    [20220705 08:06:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:39 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:06:41] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:06:41] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:06:41] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:06:53] [W] sign is not exist
    [20220705 08:06:53] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:53] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:06:55] [W] sign is not exist
    [20220705 08:06:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:06:52 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:06:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:06:55] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:06:55] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:06:55] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:07:06] [W] sign is not exist
    [20220705 08:07:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:07:06] [W] sign is not exist
    [20220705 08:07:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:03 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:07:06] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:07:06] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:07:06] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:07:17] [W] sign is not exist
    [20220705 08:07:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:14 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:07:17] [W] sign is not exist
    [20220705 08:07:17] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:17] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:07:17] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:07:17] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:07:17] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:07:28] [W] sign is not exist
    [20220705 08:07:28] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:25 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:28] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:07:30] [W] sign is not exist
    [20220705 08:07:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:07:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:07:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:07:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:07:40] [W] sign is not exist
    [20220705 08:07:40] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:07:41] [W] sign is not exist
    [20220705 08:07:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:07:41] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:07:41] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:07:41] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:07:52] [W] sign is not exist
    [20220705 08:07:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:07:52] [W] sign is not exist
    [20220705 08:07:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:07:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:07:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:07:52] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:07:52] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:07:52] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:08:03] [W] sign is not exist
    [20220705 08:08:03] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:00 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:03] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:08:04] [W] sign is not exist
    [20220705 08:08:04] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:04] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:08:04] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:08:04] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:08:04] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:08:14] [W] sign is not exist
    [20220705 08:08:14] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:11 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:14] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:08:15] [W] sign is not exist
    [20220705 08:08:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:08:15] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:08:15] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:08:15] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:08:26] [W] sign is not exist
    [20220705 08:08:26] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:26] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:08:26] [W] sign is not exist
    [20220705 08:08:26] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:26] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:08:26] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:08:26] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:08:26] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:08:37] [W] sign is not exist
    [20220705 08:08:37] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:34 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:37] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:08:39] [W] sign is not exist
    [20220705 08:08:39] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:36 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:39] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:08:39] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:08:39] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:08:39] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:08:50] [W] sign is not exist
    [20220705 08:08:50] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:47 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:50] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:08:51] [W] sign is not exist
    [20220705 08:08:51] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:48 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:08:51] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:08:51] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:08:51] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:08:51] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:02] [W] sign is not exist
    [20220705 08:09:02] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:08:59 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:02] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:09:03] [W] sign is not exist
    [20220705 08:09:03] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:00 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:03] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:09:03] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:09:03] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:09:03] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:13] [W] sign is not exist
    [20220705 08:09:13] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:11 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:13] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:09:14] [W] sign is not exist
    [20220705 08:09:14] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:11 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:14] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:09:14] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:09:14] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:09:14] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:25] [W] sign is not exist
    [20220705 08:09:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:22 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:09:25] [W] sign is not exist
    [20220705 08:09:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:09:25] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:09:25] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:09:25] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:36] [W] sign is not exist
    [20220705 08:09:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:09:37] [W] sign is not exist
    [20220705 08:09:37] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:34 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:37] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:09:37] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:09:37] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:09:37] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:47] [W] sign is not exist
    [20220705 08:09:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:09:48] [W] sign is not exist
    [20220705 08:09:48] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:45 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:48] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:09:48] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:09:48] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:09:48] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:09:59] [W] sign is not exist
    [20220705 08:09:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:57 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:09:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:00] [W] sign is not exist
    [20220705 08:10:00] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:09:57 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:00] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:00] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:00] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:00] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:10:12] [W] sign is not exist
    [20220705 08:10:12] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:09 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:12] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:12] [W] sign is not exist
    [20220705 08:10:12] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:10 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:12] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:12] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:12] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:12] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:10:24] [W] sign is not exist
    [20220705 08:10:24] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:20 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:24] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:25] [W] sign is not exist
    [20220705 08:10:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:22 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:25] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:25] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:25] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:10:35] [W] sign is not exist
    [20220705 08:10:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:36] [W] sign is not exist
    [20220705 08:10:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:36] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:36] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:36] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:10:47] [W] sign is not exist
    [20220705 08:10:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:47] [W] sign is not exist
    [20220705 08:10:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:45 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:10:58] [W] sign is not exist
    [20220705 08:10:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:58] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:10:59] [W] sign is not exist
    [20220705 08:10:59] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:10:56 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:10:59] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:10:59] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:10:59] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:10:59] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:11:09] [W] sign is not exist
    [20220705 08:11:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:11:11] [W] sign is not exist
    [20220705 08:11:11] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:08 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:11] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:11:11] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:11:11] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:11:11] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:11:21] [W] sign is not exist
    [20220705 08:11:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:11:22] [W] sign is not exist
    [20220705 08:11:22] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:19 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:22] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:11:22] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:11:22] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:11:22] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:11:34] [W] sign is not exist
    [20220705 08:11:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:11:34] [W] sign is not exist
    [20220705 08:11:34] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:31 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:11:34] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:11:34] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:11:34] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:11:45] [W] sign is not exist
    [20220705 08:11:45] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:42 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:45] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:11:46] [W] sign is not exist
    [20220705 08:11:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:11:46] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:11:46] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:11:46] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:11:56] [W] sign is not exist
    [20220705 08:11:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:11:57] [W] sign is not exist
    [20220705 08:11:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:11:54 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:11:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:11:57] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:11:57] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:11:57] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:12:08] [W] sign is not exist
    [20220705 08:12:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:12:08] [W] sign is not exist
    [20220705 08:12:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:12:08] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:12:08] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:12:08] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:12:19] [W] sign is not exist
    [20220705 08:12:19] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:19] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:12:20] [W] sign is not exist
    [20220705 08:12:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:12:20] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:12:20] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:12:20] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:12:34] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:12:35] [W] sign is not exist
    [20220705 08:12:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:12:35] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:12:35] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:12:35] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:12:46] [W] sign is not exist
    [20220705 08:12:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:12:46] [W] sign is not exist
    [20220705 08:12:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:43 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:12:46] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:12:46] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:12:46] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:12:57] [W] sign is not exist
    [20220705 08:12:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:54 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:12:57] [W] sign is not exist
    [20220705 08:12:57] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:12:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:12:57] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:12:57] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:12:57] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:12:57] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:13:08] [W] sign is not exist
    [20220705 08:13:08] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:05 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:08] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:13:09] [W] sign is not exist
    [20220705 08:13:09] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:06 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:09] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:13:09] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:13:09] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:13:09] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:13:20] [W] sign is not exist
    [20220705 08:13:20] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:17 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:20] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:13:21] [W] sign is not exist
    [20220705 08:13:21] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:18 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:21] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:13:21] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:13:21] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:13:21] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:13:32] [W] sign is not exist
    [20220705 08:13:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:13:32] [W] sign is not exist
    [20220705 08:13:32] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:29 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:32] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:13:32] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:13:32] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:13:32] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:13:43] [W] sign is not exist
    [20220705 08:13:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:40 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:13:43] [W] sign is not exist
    [20220705 08:13:43] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:41 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:43] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:13:43] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:13:43] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:13:43] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:13:55] [W] sign is not exist
    [20220705 08:13:55] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:51 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:55] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:13:56] [W] sign is not exist
    [20220705 08:13:56] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:13:53 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:13:56] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:13:56] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:13:56] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:13:56] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:14:06] [W] sign is not exist
    [20220705 08:14:06] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:06] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:14:07] [W] sign is not exist
    [20220705 08:14:07] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:04 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:07] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:14:07] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:14:07] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:14:07] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:14:18] [W] sign is not exist
    [20220705 08:14:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:15 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:14:18] [W] sign is not exist
    [20220705 08:14:18] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:16 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:18] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:14:18] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:14:18] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:14:18] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:14:29] [W] sign is not exist
    [20220705 08:14:29] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:26 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:29] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:14:30] [W] sign is not exist
    [20220705 08:14:30] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:27 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:30] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:14:30] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:14:30] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:14:30] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:14:40] [W] sign is not exist
    [20220705 08:14:40] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:37 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:40] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:14:41] [W] sign is not exist
    [20220705 08:14:41] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:38 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:41] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:14:41] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:14:41] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:14:41] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:14:51] [W] sign is not exist
    [20220705 08:14:51] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:51] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:14:52] [W] sign is not exist
    [20220705 08:14:52] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:14:49 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:14:52] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:14:52] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:14:52] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:14:52] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:15:03] [W] sign is not exist
    [20220705 08:15:03] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:00 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:03] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:15:03] [W] sign is not exist
    [20220705 08:15:03] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:01 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:03] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:15:03] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:15:03] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:15:03] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:15:14] [W] sign is not exist
    [20220705 08:15:14] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:11 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:14] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:15:15] [W] sign is not exist
    [20220705 08:15:15] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:12 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:15] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:15:15] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:15:15] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:15:15] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:15:25] [W] sign is not exist
    [20220705 08:15:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:15:26] [W] sign is not exist
    [20220705 08:15:26] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:23 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:26] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:15:26] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:15:26] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:15:26] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:15:37] [W] sign is not exist
    [20220705 08:15:37] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:35 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:37] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:15:38] [W] sign is not exist
    [20220705 08:15:38] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:35 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:38] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:15:38] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:15:38] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:15:38] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:15:49] [W] sign is not exist
    [20220705 08:15:49] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:46 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:49] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:15:49] [W] sign is not exist
    [20220705 08:15:49] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:47 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:15:49] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:15:49] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:15:49] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:15:49] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:00] [W] sign is not exist
    [20220705 08:16:00] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:57 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:00] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:16:02] [W] sign is not exist
    [20220705 08:16:02] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:15:59 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:02] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:16:02] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:16:02] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:16:02] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:13] [W] sign is not exist
    [20220705 08:16:13] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:10 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:13] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:16:13] [W] sign is not exist
    [20220705 08:16:13] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:10 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:13] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:16:13] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:16:13] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:16:13] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:24] [W] sign is not exist
    [20220705 08:16:24] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:21 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:24] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:16:25] [W] sign is not exist
    [20220705 08:16:25] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:22 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:25] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:16:25] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:16:25] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:16:25] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:35] [W] sign is not exist
    [20220705 08:16:35] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:32 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:35] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:16:36] [W] sign is not exist
    [20220705 08:16:36] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:33 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:36] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:16:36] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:16:36] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:16:36] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:46] [W] sign is not exist
    [20220705 08:16:46] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:46] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ot.io.mi.com, host: 110.43.0.83
    [20220705 08:16:47] [W] sign is not exist
    [20220705 08:16:47] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:44 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}
    [20220705 08:16:47] [I] parse_http_dns, http_dns fail, did: 322119905, dm: xx.ott.io.mi.com, host: 110.43.0.85
    [20220705 08:16:47] [I] getaddrinfo (xx.ot.io.mi.com:8053): Name or service not known
    [20220705 08:16:47] [I] getaddrinfo (xx.ott.io.mi.com:80): Name or service not known
    [20220705 08:16:47] [E] server_conn_setup, get_conn_server fail, will try reconnect 10s later
    [20220705 08:16:58] [W] sign is not exist
    [20220705 08:16:58] [E] get_server_list_by_httpdns, parse_http_dns_response, http response msg: HTTP/1.1 400 Bad Request
    Server: Tengine
    Date: Tue, 05 Jul 2022 08:16:55 GMT
    Content-Type: application/json; charset=utf-8
    Content-Length: 31
    Connection: close
    
    {"message":"request not valid"}