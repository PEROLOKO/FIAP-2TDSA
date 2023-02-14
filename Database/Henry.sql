-- EXERCICIO 01
declare
    v_sal_min number(10,2) := 650.80;
    v_sal_atual number(10,2);
begin
    v_sal_atual := v_sal_min * 1.25;
    DBMS_OUTPUT.PUT_LINE('O valor do salário atual é '||v_sal_atual);
end;

-- EXERCICIO 02
declare
    v_dol number(10,2) := 45;
    v_real number(10,2);
    v_cambio number(4,2) := 2.98;
begin
    v_real := v_dol * v_cambio;
    DBMS_OUTPUT.PUT_LINE('O valor de USD$'||v_dol||' em reais é R$'||v_real);
end;

-- EXERCICIO 03
declare
    v_sal_min number(10,2) := &salario;
    v_sal_atual number(10,2);
begin
    v_sal_atual := v_sal_min * 1.25;
    DBMS_OUTPUT.PUT_LINE('O valor do salário atual é '||v_sal_atual);
end;

-- EXERCICIO 04
declare
    v_dol number(10,2) := &valor_dolar;
    v_real number(10,2);
    v_cambio number(4,2) := 2.98;
begin
    v_real := v_dol * v_cambio;
    DBMS_OUTPUT.PUT_LINE('O valor de USD$'||v_dol||' em reais é R$'||v_real);
end;

-- EXERCICIO 05
declare
    val_carro number(10,2) := &valor_carro;
    qnt_parcela number(2) := 10;
    val_juros number (3,2) := 1.03;
    val_parcela number(10,2);
begin
    val_parcela := (val_carro / qnt_parcela) * val_juros;
    DBMS_OUTPUT.put_line('O valor de uma parcela de um carro de R$'||val_carro||' em '||qnt_parcela||' parcela(s) com '||(val_juros - 1) * 100||'% de juros é de R$'||val_parcela);
end;