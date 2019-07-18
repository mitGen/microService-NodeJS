# microservice Node js
создать сервис на Node.JS, который будет иметь возможность отдавать по запросам GET информацию о состоянии сервиса и текст "This is test server on Node.JS":
PATH: host/api/info
Method GET — get information about test service:
{
description: text,
active: boolean
}
Также сервер должен принимать запрос POST, при этом в теле запроса нужно указать JSON
PATH: host/api/change-state
Method POST —modification of server state:
{
active: boolean
}
Изменяя значение параметра active можно изменить состояние сервера (проверку состояния можно выполнить через GET-запрос)
Также нужно реализовать корректную обработку ошибок (группы 4ХХ и 5ХХ)
