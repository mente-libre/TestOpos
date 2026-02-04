import { type SeedExam } from '@/lib/definitions';
import { ebepTest as ebep } from './seed-data-ebep';
import { constitucionTest as constitucion } from './seed-data-constitucion';
import { advoGeneralTestMedium as ebepMedium } from './seed-data-ebep-medium';
import { advoGeneralTestHard as ebepHard } from './seed-data-ebep-hard';
import { ley1_1983Test as ley1_1983 } from './seed-data-ley1-1983';
import { ley3_2007Test as ley3_2007 } from './seed-data-ley3-2007';
import { ley9_1990Test as ley9_1990 } from './seed-data-ley9-1990';
import { ley9_2017Test as ley9_2017 } from './seed-data-ley9-2017';
import { ley19Test as ley19_2013 } from './seed-data-ley19-2013';
import { ley29Test as ley29_1998 } from './seed-data-ley29-1998';
import { ley39Test as ley39_2015 } from './seed-data-ley39-2015';
import { lo3_1983Test as lo3_1983 } from './seed-data-lo3-1983';
import { madrid2017Test as madrid_2017 } from './seed-data-madrid-2017';
import { madrid2023Test as madrid_2023 } from './seed-data-madrid-2023';
import { madrid2025Test as madrid_2025 } from './seed-data-madrid-2025';
import { officeTest as office } from './seed-data-office';
import { seguridadSocialTest as seguridad_social } from './seed-data-seguridad-social';
import { tema14Test as tema14 } from './seed-data-tema14';

const exams: SeedExam[] = [
    ebep,
    constitucion,
    ebepMedium,
    ebepHard,
    ley1_1983,
    ley3_2007,
    ley9_1990,
    ley9_2017,
    ley19_2013,
    ley29_1998,
    ley39_2015,
    lo3_1983,
    madrid_2017,
    madrid_2023,
    madrid_2025,
    office,
    seguridad_social,
    tema14
];

export const CATEGORY_DEFINITIONS = exams.map(cat => ({ id: (cat as SeedExam).id, name: (cat as SeedExam).name }));
