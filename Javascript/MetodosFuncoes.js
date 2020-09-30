export class MetodosFuncoes
{
    imprimirPontos(Npontos) // Forma de utilizar funções em classes
    {
        var i = 0 ;
        var test = '';
        for (i = 0; i < Npontos; i++) {
            test += '*';
        }

        return test;
    }
}