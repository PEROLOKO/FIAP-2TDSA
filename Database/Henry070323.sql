create table T_ALUNO2 (RA char(9),
                       NOME varchar2(50),
                       constraint ALUNO2_PK primary key(RA));

insert into t_aluno2 (RA,NOME) values ('111222333','Antonio Alves');
insert into t_aluno2 (RA,NOME) values ('222333444','Beatriz Bernandes');
insert into t_aluno2 (RA,NOME) values ('333444555','Cláudio Cardoso');

declare
    v_ra char(9) := '333444555';
    v_nome varchar2(50);
begin
    select nome into v_nome from t_aluno2 where ra = v_ra;
    dbms_output.put_line('O nome do aluo é: '||v_nome);
end;

declare
    v_ra char(9) := '444555666';
    v_nome varchar2(50) := 'Daniela Dorneles';
begin
    insert into t_aluno2 (ra,nome) values (v_ra,v_nome);
end;

select * from t_aluno2;

declare
    v_ra char(9) := '111222333';
    v_nome varchar2(50) := 'Antonio Rodrigues';
begin
    update t_aluno2 set nome = v_nome where ra = v_ra;
end;

declare
    v_ra char(9) := '444555666';
begin
    delete from t_aluno2 where ra = v_ra;
end;

select * from t_aluno2;

drop table t_aluno2;

drop table boletim;

create table boletim (
    rm number(3) not null,
    nome varchar2(20) not null,
    c_hora number(3) not null,
    nota1 number(4,2) not null,
    nota2 number(4,2) not null,
    nota3 number(4,2) not null,
    media number(4,2),
    faltas number(3) not null,
    situacao varchar2(40)
);

insert into boletim (rm,nome,c_hora,nota1,nota2,nota3,media,faltas,situacao) values (135,'DB Application',200,10,10,10,null,0,null);
insert into boletim (rm,nome,c_hora,nota1,nota2,nota3,media,faltas,situacao) values (135,'IA',180,7.5,7.5,8.0,null,170,null);
insert into boletim (rm,nome,c_hora,nota1,nota2,nota3,media,faltas,situacao) values (135,'Chatbox',180,1.0,2.5,1.5,null,18,null);
insert into boletim (rm,nome,c_hora,nota1,nota2,nota3,media,faltas,situacao) values (135,'UX',200,2.5,1.0,1.5,null,170,null);
insert into boletim (rm,nome,c_hora,nota1,nota2,nota3,media,faltas,situacao) values (135,'Mobile',200,4.0,5.0,4.5,null,20,null);

declare
    v_nome varchar2(20) := 'IA';
    v_nota1 number(4,2);
    v_nota2 number(4,2);
    v_nota3 number(4,2);
    v_media number(4,2);
begin
    select nota1 into v_nota1 from boletim where v_nome = nome;
    select nota2 into v_nota2 from boletim where v_nome = nome;
    select nota3 into v_nota3 from boletim where v_nome = nome;
    v_media := (v_nota1 + v_nota2 + v_nota3) / 3;
    update boletim set media = v_media where nome = v_nome;
end;




