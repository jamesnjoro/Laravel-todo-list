<template>
<div>

    <div class="heading">  
            <h3>
                <span>
                    <span id="headingP">|</span>
                    My Tasks
                </span>
            </h3>
        </div>
        <div class="card shadow p-3 mb-5 bg-white rounded mn">
                <div class="card-header ">
                    <div class="Htwo"><h4>TALLY</h4></div>
                    <div class="d-flex justify-content-end">
                            <span id="count"> x out of y completed</span>
                    </div>
                    <div class="progress" style="height: 2px;">
                            <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="card-body"> 
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></td>
                                <td>Take out the trash</td>
                                <td colspan="2"><span class="icon"><i class="far fa-edit"></i></span> <span class="icon"><i class="far fa-trash-alt"></i></span></td>
                            </tr>
                            <tr>
                                    <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></td>
                                    <td>Tell Albert to behave</td>
                                    <td colspan="2"><span class="icon"><i class="far fa-edit"></i></span> <span class="icon"><i class="far fa-trash-alt"></i></span></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <form action="">
                    <div class="form-group row">
                            <label for="staticEmail" class=" col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-form-label"><span id="add"><i class="fas fa-plus"></i></span></label>
                            <div class="col-9 col-sm-9 col-md-11  col-lg-9 col-xl-9 ">
                                <input type="text" class="form-control" id="staticEmail">
                            </div>
                    </div>
                   
                </form>
            </div>
    </div>

</template>
<script>
export default {
    
}
</script>
    <style>
        .heading{
            margin-top: 30px ;
        }
        #headingP{
            margin: 5px;
            color: red;
            font-size: 50px;
        }
        #count{
            font-size: 15px;
        }
        .icon{
            margin: 10px;
        }
        #add{
            padding-left: 30px;
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
      width: 80%;
      margin: auto;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mn{
      width: 80%;
      margin: auto;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .mn{
      width: 80%;
  }
}
        
    </style>