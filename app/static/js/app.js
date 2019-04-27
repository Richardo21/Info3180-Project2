/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <img src= "https://ui-ex.com/images/camerade-clipart-svg.png" width= "30" 
        height= "30" alt="Photo of a camera drawing" >
      <router-link class="navbar-brand" id="photogram" to="/">Photogram <span class="sr-only">(current)</span></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="navbar-items">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/explore">Explore</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'users', params: {user_id : current_user_id}}">My Profile</router-link>
          </li>
          <li v-if="auth" class="nav-item active">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
          <li v-else class="nav-item active">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
    `,
    data: function(){
        return {
            auth: localStorage.hasOwnProperty("current_user"),
            current_user_id: localStorage.hasOwnProperty("current_user") ? JSON.parse(localStorage.current_user).id : null
        }
    }
});

Vue.component('app-footer', {
    template: `
    <footer>
        <div class="container">
            <p>Copyright &copy; Flask Inc.</p>
        </div>
    </footer>
    `
});

const Home = Vue.component('home', {
   template: `
    <div class="container">
        <div class= "right-component">
            <img class="styleImg" src= "https://ui-ex.com/images/camerade-clipart-svg.png" width= "30" 
            height= "30" alt="Photo of a camera drawing" >
            <h2 class="styleHeading">Photogram</h2><br>
            <p>Share photos of your favourite moments with friends, family and the world.</p><br><br>
            <div class="btns">
                <router-link class="btn btn-success col-md-5" to="/register">Register</router-link>
                <router-link class="btn btn-primary col-md-5" to="/login">Login</router-link>
            </div>
        </div>
        <div class="left-component">
            <img class= "homePagePhoto" src= "https://golfadvisor.brightspotcdn.com/dims4/default/9b4d71b/2147483647/strip/true/crop/1500x896+0+32/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2F79%2F22%2F07744318ad1e33a0f649db0be429%2Fp.php"
            alt = "Image of greenry" height= "400" width= "525">
        </div>

    </div>
   `,
    data: function() {
       return {}
    }
});

const Register = Vue.component('register',{
 template: `
    <div>
        <h4 class="form-title">Register</h4><br>
        <div class="form-container">
            <form id="register-form"  @submit.prevent="register" enctype="multipart/form-data">
            <label>User Name</label><br>
            <input type="text" class="form-control"/><br>
            <label>Password</label><br>
            <input type="password" class="form-control"/><br>
            <label>First Name</label>
            <input type="text" class="form-control"/><br>
            <label>Last Name</label>
            <input type="text" class="form-control"/><br>
            <label>Email</label>
            <input type="text" class="form-control"/><br>
            <label>Location</label>
            <input type="text" class="form-control"/><br>
            <label>Biography</label><br>
            <textarea type="text" class="form-control"></textarea><br>
            <label>Profile Photo</label><br>
            <input type="file"/><br><br>
            <input type="submit" class="btn btn-success col-md-12" value="Register"/>
            </form>
            <div v-if='messageFlag' style="margin-top: 5%;">
                <div v-if="!errorFlag ">
                    <div class="alert alert-success" >
                        {{ message }}
                    </div>
                </div>
                <div v-else >
                    <ul class="alert alert-danger">
                        <li v-for="error in message">
                            {{ error }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>    
    `,
    methods: {
        register: function(){
            let self = this;
            let register = document.getElementById('register-form');   
            let form_data = new FormData(register);
              
            fetch("/api/users/register",{
                method: "POST",
                body: form_data,
                headers: {
                    'X-CSRFToken': token
                },
                credentials: 'same-origin'
            }).then(function(response){
                return response.json();
            }).then(function(jsonResponse){
                self.messageFlag = true

                if (jsonResponse.hasOwnProperty("error")){
                    self.errorFlag = true;
                    self.message = jsonResponse.errors;
                }
                else if (jsonResponse.hasOwnProperty("message")){
                    self.$router.push({path: "/login"});
                }
            })

        }

    },
    data: function(){
        return {
            messageFlag: false,
            errorFlag: false,
            message: []
        }
    }


});

const AllPost= Vue.component('allpost',{
    template: `
    <div>
    <div class="grid">
    <div></div>
    <div></div>
    </div>
    </div>
    `
});


const Profile= Vue.component('profile',{
    template: `
    <div>
    <div id="firstcontainer">
    <div>
    <img class="pic" src="{{url_for('static', filename='lisa.jpg')}}" />
    </div>
    <div>
    <h3 v-for="user in Users">{{user.username}}</h3>
    <br>
    <p v-for="user in Users">{{user.location}}</p><br>
    <p v-for="user in Users">{{user.join_on}}</p>
    <p> v-for="user in Users">{{user.biography}}</p>
    </div>
    <div>
    <p>6</p>
    </div>
    <div>
    <p>Post</p>
    </div>
    <div>
    <p>7</p>
    </div>
    <div>
    <p>Follower</p>
    </div>
    <input type="submit" class="btn btn-success col-md-12" value="Follow"/>
    
    
    </div>
    </div>
    `
});


const Login = Vue.component('login', {
    template: `
    <div>
        <h4 class= "form-title">Login</h4><br>
        <div class="form-container">
            <form id="login-form" @submit.prevent="login">
            <label>User Name</label><br>
            <input type="text" class="form-control"><br>
            <label>Password</label><br>
            <input type="password" class="form-control"><br><br>
            <input type="submit" class="btn btn-success col-md-12" value="Login">
            <div v-if='messageFlag' style="margin-top:5%;">
                <div class="alert alert-danger center" style="width: 100%; margin-top: 5%;">
                    {{ message }}
                </div>
          </div>
            </form>
        </div>
    </div>
    `,
    methods: {
        login: function(){
            const self = this

            let login_info = document.getElementById('login-form')
            let login_form = new FormData(login_info)

            fetch("/api/auth/login",{
                method: "POST",
                body: login_form,
                headers: {
                    'X-CSRFToken': token
                },
                credentials: 'same-origin'
            }).then(function(response){
                return response.json()
            }).then(function(jsonResponse){
                self.messageFlag = true

                if (jsonResponse.hasOwnProperty("token")){
                    curr_user = {"token": jsonResponse.token, id: jsonResponse.user_id}
                    localStorage.current_user = JSON.stringify(curr_user)

                    router.go()
                    router.push("/explore")
                }
                else{
                    self.message = jsonResponse.errors
                }
            }).catch(function(error){
                self.messageFlag = false
                console.log(error)
            })
        }

    },
    data: function(){
        return {
            messageFlag: false,
            message: " "
        }
    }

});

const Logout = Vue.component('logout', {
   template: `
    <div>
    </div>
   `,
   created: function(){
       const self = this
       
       fetch("/api/auth/logout",{
           method: "GET"
       }).then(function(response){
           return response.json()
       }).then(function(jsonResponse){
           localStorage.removeItem("current_user")
           router.go()
           router.push("/")
       }).catch(function(error){
           console.log(error)
       })
   }
    
    
});

const NotFound = Vue.component('not-found', {
    template: `
    <div>
        <h1>404 - Not Found</h1>
    </div>
    `,
    data: function () {
        return {}
    }
})

// Define Routes
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: "/", component: Home},
        // Put other routes here
        {path: "/register", component: Register},
        {path: "/login", component: Login},
        {path: "/logout", component: Logout},
        {path: "/explore", component: AllPost},
        {path: "/user/:user_id", name: "users",component: Profile},
        // This is a catch all route in case none of the above matches
        {path: "*", component: NotFound}
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});