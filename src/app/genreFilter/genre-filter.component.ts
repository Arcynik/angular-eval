import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre } from 'src/types';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  menuOpen: boolean = false;
  genres: Genre[] = [];
  @Output() selectGenreEvent = new EventEmitter<string>();

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(genres => this.genres = genres);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.selectGenreEvent.emit("");
  }

  filterGenre(genreName: string) {
    this.selectGenreEvent.emit(genreName);
  }

  pager(line: number): Genre[] {
    let min = line == 1 ? 0 : 10;
    let max = line == 1 ? 9 : this.genres.length;
    
    return this.genres.slice(min, max);
  }
}
