# wolf golang server  

## Local server start up  
In /golang/server/cmd/main: `go run main.go`  

## Local testing  
1. After local server is started, open `http://localhost:9000/wolf/api/v1/` in the browser.  
2. You will see a graphql playground.  
3. write test query anc check result:  

```
query get {
  getRolesById(input:{ids:[2002]}) {
    Roles{
      name
      id
    }
  }
}
```