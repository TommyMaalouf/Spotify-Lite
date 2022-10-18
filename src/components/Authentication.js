import queryString from "querystring";


export default class Authentication {

    static TOKEN_KEY = 'access-token';
    static SEARCH_STRING = 'artist-query-search';
    static SEARCH_DATA = 'artist-data-search';
    static clientId = 'fde2f641e61f4cd4b5b5c952457741cb';
    static redirect_uri = 'http://localhost:3000/'
    static api_uri = "https://accounts.spotify.com/authorize";
    static scope = [
        "user-read-private",
        "user-read-email",
        "user-modify-playback-state",
        "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-top-read",
      ];
    static AUTHORIZATION_URL = `${this.api_uri}?client_id=${this.clientId}&redirect_uri=${this.redirect_uri}&scope=${this.scope.join(
        " "
      )}&response_type=token&show_dialog=true`;
    
    static getAccessTokenFromRedirect() {

        const params = queryString.parse(window.location.hash.slice(1));           

        if (params.access_token && typeof params.access_token === 'string') {
            return params.access_token;
        } else {
            return null;
        }

    }

    static getAccessToken() {
        return window.localStorage.getItem(this.TOKEN_KEY);
    }

    static setAccessToken(token) {
        window.localStorage.setItem(this.TOKEN_KEY, token);
    	window.location.hash="";
    }

    static getSearchString() {
        return window.localStorage.getItem(this.SEARCH_STRING);
    }

    static getSearchData() {
        return window.localStorage.getItem(this.SEARCH_DATA)? JSON.parse(window.localStorage.getItem(this.SEARCH_DATA)) : [];
    }

    static storeArtistSearchData(value, data) {
    	window.localStorage.setItem(this.SEARCH_STRING, value);
    	window.localStorage.setItem(this.SEARCH_DATA, JSON.stringify(data));
    }

    static isLoggedIn() {
        return !!this.getAccessToken();
    };

    static logout() {
        window.localStorage.removeItem(this.TOKEN_KEY);
    };

    static getAuthorizationHeader() {
        return {
            headers: {
                Authorization: `Bearer ${this.getAccessToken()}`
            }
        };
    };

}