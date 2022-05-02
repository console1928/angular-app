import PersonKnownFor from './PersonKnownFor';
import PersonKnownForVariant from './PersonKnownForVariant';

export default interface PersonResult {
  profile_path: string,
  adult: boolean;
  id: number,
  known_for: PersonKnownFor[] | PersonKnownForVariant[],
  name: string,
  popularity: number
}
