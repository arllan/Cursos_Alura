export class exemplo_get_e_set
{
    _meuNome; // parametro protegido
    _minhaIdade; // parametro protegido

    get getMeuNome() { // metodo get retorna valor da variavel 
        return this._meuNome;
    }

    set setMeuNome(valor) { // metodo set adicionar valor a variavel
        this._meuNome = valor;
    }

    get getMinhaIdade() { // metodo get retorna valor da variavel 
        return this._minhaIdade;
    }

    set setMinhaIdade(valor) { // metodo set adicionar valor a variavel
        this._minhaIdade = valor;
    }
}
