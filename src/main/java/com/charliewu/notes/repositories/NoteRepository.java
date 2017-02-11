package com.charliewu.notes.repositories;

import com.charliewu.notes.domain.Account;
import com.charliewu.notes.domain.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by Charlie Wu on 2017-02-03.
 */
public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findByAccountOrderByIdDesc(Account account);
}
