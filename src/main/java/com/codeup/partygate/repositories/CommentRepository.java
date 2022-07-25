package com.codeup.partygate.repositories;

import com.codeup.partygate.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByPartyId(long id);
}
