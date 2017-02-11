package com.charliewu.notes.repositories;

import com.charliewu.notes.domain.Label;
import com.charliewu.notes.domain.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by charliewu on 4/2/17.
 */
public interface LabelRepository extends JpaRepository<Label, Long> {
}
