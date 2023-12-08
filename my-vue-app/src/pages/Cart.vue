
<script setup>



</script>

<template>
    <div class="container">
        <div>
            <h2 style="color:aliceblue">Carrinho de Compras</h2>
            <table class="table border-0 rounded-4">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img class="img-responsive"
                                src="https://i5.walmartimages.com/asr/91514adf-1cd0-4a89-931e-b62ea863a236.6acd4dd8fcad9642ee954a3e688da626.jpeg"
                                height="80px" />
                        </td>
                        <td>Tênis leve</td>
                        <td>R$ 39,82</td>
                        <td>1</td>
                        <td>R$ 39,82</td>
                    </tr>
                    <tr>
                        <td><img class="img-responsive"
                                src="https://i5.walmartimages.com/asr/91514adf-1cd0-4a89-931e-b62ea863a236.6acd4dd8fcad9642ee954a3e688da626.jpeg"
                                height="80px" /></td>
                        <td>Relógio Quartz</td>
                        <td>R$ 80,11</td>
                        <td>1</td>
                        <td>R$ 80,11</td>
                    </tr>
                </tbody>
            </table>
            <div class="row border-0 rounded-4"
                style="background-color: rgb(47, 47, 47); color: aliceblue; position: fixed; right: 200px; top: 150px;">

                <div class="col-sm-6">
                    <h4>Resumo do Pedido</h4>
                    <hr>
                    <h5>Total: R$ 143,23</h5>
                    <hr>
                </div>
                <div class="col-sm-6">
                    <h4>Pagamento</h4>
                    <select class="form-control">
                        <option>Visa Celo</option>
                        <option>G Pay W</option>
                        <option>Boleto</option>
                    </select>
                    <button class="btn btn-primary mt-2">Finalizar Compra</button>
                </div>
            </div>
        </div>

    </div>
</template>

<style></style>