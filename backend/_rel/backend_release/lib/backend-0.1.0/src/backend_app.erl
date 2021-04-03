-module(backend_app).
-behaviour(application).

-export([start/2]).
-export([stop/1]).

start(_Type, _Args) ->
   Dispatch = cowboy_router:compile([
        {'_', [
            {"/", toppage_h, [help]},
            {"/create_user", toppage_h, [create_user]},
            {"/get_user/:record_id", toppage_h, [get_user]},
            {"/get_all_users", toppage_h, [get_all_users]},
            {"/get_user_by_name/:user_name", toppage_h, [get_user_by_name]}
        ]}
    ]),
    {ok, _} = cowboy:start_clear(my_http_listener,
        [{port, 80}],
        #{env => #{dispatch => Dispatch}}
    ),
	backend_sup:start_link().

stop(_State) ->
	ok.
