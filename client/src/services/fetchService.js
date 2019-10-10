const FetchService = {

    fetchDetails:function(url,method,data){
        return fetch(url,this.generateRequestParams(method,data))
    },
    generateRequestParams:function(method,data){
        let formData = this.generateFormData(data);
        let requestObject = {};
        requestObject["headers"] = {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-access-token": this.getAccessTocket()
        }
        requestObject["method"] = method;
        requestObject["body"] = formData;
        
        return requestObject;
    },
    generateFormData:function(data){
        var formBody = [];
        for (var property in data) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(data[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return formBody
    },
    getAccessTocket:function(){
        return this.accessCookie("jwt");
    },
    setAccessTocket:function(value){
        this.createCookie('jwt',value,1);
    },
    createCookie:function(cookieName,cookieValue,daysToExpire){
        var date = new Date();
        date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
    },
    accessCookie:function(cookieName){
        var name = cookieName + "=";
        var allCookieArray = document.cookie.split(';');
        for(var i=0; i<allCookieArray.length; i++)
        {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name)==0)
        return temp.substring(name.length,temp.length);
        }
        return "";
    },
    handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            return data;
        });
    }
}

export default FetchService; 