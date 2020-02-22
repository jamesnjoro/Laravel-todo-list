<template>
    <div>
        <div class="card shadow p-3 mb-5 bg-white rounded mn">
            <div class="card-header">
                    <div class="d-flex justify-content-start">
                            <span id="hd"> USER LOGIN </span>
                    </div>
            </div>
            <div class="card-body">
                <form action="">
                        <div class="col-auto">
                                <label class="sr-only" for="inlineFormInputGroup">Email</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-envelope"></i></div>
                                </div>
                                <input type="email" class="form-control" id="inlineFormInputGroup" placeholder="Email">
                            </div>
                        </div>
                        <div class="col-auto">
                                <label class="sr-only" for="inlineFormInputGroup">Password</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-lock"></i></div>
                                </div>
                                <input type="password" class="form-control" id="inlineFormInputGroup" placeholder="Password">
                            </div>
                        </div>
                        <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2 d-flex sb">Login</button>
                                <span> or register</span>
                        </div>
                </form>
                    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
    <style>

        .mn{
            margin-top: 15%;
            margin-left: auto;
            margin-right: auto;
        }
        .sb{
            margin-top: 40px;
        }

        
            /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
   
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mn{
      width: 60%;
     
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mn{
      width: 60%;
     
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .mn{
      width: 60%;
  }
}
    </style>