export class ContaCorrente
{
    agencia;

    _cliente; // esse atributo vai receber todos os parametroda outra classe

    //#saldo; // de deixar o campo em modo private do javascript | agora para acessar esse campo devemos utilizar dentro da classe o this.#saldo e fora deve ser utilizado #saldo, mas como ele ta protegido não vai ser acessivel fora...
    _saldo; // forma antiga de informa que o campo e privado e não deve ser acessado fora da classe | essa forma foi feita pelos desenvolvedores 
    sacar(valor) // metodos são funções
    {
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    set cliente(novoValor) //  metodo magicos 'Set' essa forma adicionamos um valor ao parametro protegido
    {
        this._cliente = novoValor;
    }

    get cliente()
    {
        return this._cliente;
    }

    depositar(valor)
    {
        if(valor > 0){
            this._saldo += valor;
        }
    }
}