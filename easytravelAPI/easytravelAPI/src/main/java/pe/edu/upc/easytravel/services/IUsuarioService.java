package pe.edu.upc.easytravel.services;

import pe.edu.upc.easytravel.entities.Usuarios;

import java.util.List;

public interface IUsuarioService {

    public void insert(Usuarios usuarios);
    List<Usuarios> list();
}
