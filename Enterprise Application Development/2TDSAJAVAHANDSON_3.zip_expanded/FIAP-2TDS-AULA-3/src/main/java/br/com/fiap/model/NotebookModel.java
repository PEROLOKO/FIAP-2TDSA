package br.com.fiap.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.fiap.enuns.TipoHdEnum;

@Entity
@Table(name = "Notebook")
public class NotebookModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String processador;
	@Column(name = "memoria_ram")
	private int memoriaRam;
	@Column(name = "memoria_hd")
	private int memoriaHD;
	@Enumerated(EnumType.STRING)
	private TipoHdEnum tipo;
	
	public NotebookModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NotebookModel(String processador, int memoriaRam, int memoriaHD, TipoHdEnum tipo) {
		super();
		this.processador = processador;
		this.memoriaRam = memoriaRam;
		this.memoriaHD = memoriaHD;
		this.tipo = tipo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProcessador() {
		return processador;
	}

	public void setProcessador(String processador) {
		this.processador = processador;
	}

	public int getMemoriaRam() {
		return memoriaRam;
	}

	public void setMemoriaRam(int memoriaRam) {
		this.memoriaRam = memoriaRam;
	}

	public int getMemoriaHD() {
		return memoriaHD;
	}

	public void setMemoriaHD(int memoriaHD) {
		this.memoriaHD = memoriaHD;
	}

	public TipoHdEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoHdEnum tipo) {
		this.tipo = tipo;
	}

	
}
