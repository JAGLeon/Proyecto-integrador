let container = document.getElementById("seccion");

const comprarTicket=()=>{
    container.innerHTML=
    `
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                <h5 class="card-title text-center">Estudiantes</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center font-weight-bold">80%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-info mr-1">
                                <h5 class="card-title text-center">Trainee</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center font-weight-bold">50%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-warning mr-1">
                                <h5 class="card-title text-center">Juior</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center font-weight-bold">15%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-uppercase text-center">
                        <small>venta</small>
                        <h2>VALOR DE TICKET $200</h2>
                    </div>
                </div>            
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                            <div class="d-flex ">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1 ">
                                    <input type="text" class="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-12 m-1">
                                <input type="mail" class="form-control" placeholder="Correo"/>
                            </div>
                            <div class="d-flex">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas" type="text" class="form-control" placeholder="Cantidad"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                    <label for="">Categoria</label>
                                    <select class="form-select" id="inputSelect">
                                        <option value="estudiante">Estudiante</option>
                                        <option value="trainee">Trainee</option>
                                        <option value="junior">Junior</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="alert alert-primary col-12 col-md-12 m-1" >
                                 Total a Pagar: $
                            </div>
                        </div>
                        <div class="form-row d-flex col-12 col-md-12 m-1">
                            <button class="btn btn-lg btn-success col-6 m-1 ">Borrar</button>
                            <button class="btn btn-lg btn-success col-6 m-1">Resumen</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};