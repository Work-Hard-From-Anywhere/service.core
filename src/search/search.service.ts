import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class SearchService {
  private readonly placesAPIKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.placesAPIKey = this.configService.get<string>('PLACES_API_KEY');
  }

  async getPlacesAutoComplete(search: string): Promise<any> {
    // TODO: Use cache to manage session token
    const sessionToken = 'token';
    const response = await firstValueFrom(
      this.httpService
        .post(
          'https://places.googleapis.com/v1/places:autocomplete',
          {
            input: search,
            sessionToken,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': this.placesAPIKey,
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log('Error in getPlacesAutoComplete', error);
            throw error;
          }),
        ),
    );
    return response.data;
  }
}
