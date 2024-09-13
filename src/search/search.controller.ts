import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';

import { SearchQueryDto } from './search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('places-autocomplete')
  async getPlacesAutoComplete(
    @Query(ValidationPipe) query: SearchQueryDto,
  ): Promise<any> {
    const { search } = query;

    return this.searchService.getPlacesAutoComplete(search);
  }
}
