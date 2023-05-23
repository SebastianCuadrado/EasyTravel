package pe.edu.upc.easytravel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.easytravel.entities.Usuarios;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuarios, Integer> {
}
