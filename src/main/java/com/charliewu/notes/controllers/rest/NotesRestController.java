package com.charliewu.notes.controllers.rest;

import com.charliewu.notes.bean.LabelBean;
import com.charliewu.notes.bean.NoteBean;
import com.charliewu.notes.domain.Account;
import com.charliewu.notes.domain.Label;
import com.charliewu.notes.domain.Note;
import com.charliewu.notes.repositories.AccountRepository;
import com.charliewu.notes.repositories.LabelRepository;
import com.charliewu.notes.repositories.NoteRepository;
import com.charliewu.notes.services.SecurityService;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by Charlie Wu on 2017-02-03.
 */
@RestController
@RequestMapping("/rest/notes")
public class NotesRestController {

    private static final Logger logger = LoggerFactory.getLogger(NoteRepository.class);

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private LabelRepository labelRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    LabelsHelper labelsHelper;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public List<Note> list() {

        List<Note> notes = noteRepository.findAll();
        return notes;
    }

    @ResponseBody
    @RequestMapping(path = "/labels", method = RequestMethod.GET)
    public List<LabelBean> labels() {
        List<Label> labels = labelRepository.findAll();
        Map<String, Label> map = Maps.newHashMap();
        for (Label label : labels) {
            map.put(label.getName(), label);
        }

        List<Label> filteredLabels = Lists.newArrayList(map.values());
        return labelsHelper.toLabelBeans(filteredLabels);
    }

    @ResponseBody
    @RequestMapping(path = "/account", method = RequestMethod.GET)
    public Account account() {
        return accountRepository.findAll().get(0);
    }

    @Transactional
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST)
    public Note saveNote(@RequestBody NoteBean bean) {

        Account account = accountRepository.findAll().get(0);

        Note note = new Note(bean.getContent(), account);
        noteRepository.save(note);

        Set<Label> labels = Sets.newHashSet();
        for (String text : bean.getLabels()) {
            Label label = new Label(text, note);
            labelRepository.save(label);
            labels.add(label);
        }
        note.setLabels(labels);
        noteRepository.flush();
        System.out.println("save note id" + note.getId());
        return noteRepository.findOne(note.getId());
    }

    @Transactional
    @ResponseBody
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Note updateNote(@PathVariable long id, @RequestBody NoteBean bean) {

        Note note = noteRepository.findOne(id);
        note.setContent(bean.getContent());

        Set<Label> labels = Sets.newHashSet();
        for (Label label : note.getLabels()) {
            if (!bean.getLabels().contains(label.getName())) {
                labelRepository.delete(label);
            } else {
                bean.getLabels().remove(label.getName());
                labels.add(label);
            }
        }

        for (String text : bean.getLabels()) {
            Label label = labelRepository.save(new Label(text, note));
            labels.add(label);
        }

        note.setLabels(labels);
        noteRepository.flush();
        return noteRepository.findOne(note.getId());
    }

    @Transactional
    @ResponseBody
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteNote(@PathVariable long id) {

        noteRepository.delete(id);
    }
}
