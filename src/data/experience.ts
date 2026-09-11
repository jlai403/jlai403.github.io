export interface Job {
  company: string;
  role: string;
  duration: string;
}

export const jobs: Job[] = [
  { company: 'stellaralgo', role: 'svp engineering', duration: '2017 - current' },
  { company: 'jlai consulting', role: 'founder', duration: '2013 - current' },
  { company: 'duck labs', role: 'product development & partner', duration: '2016 - 2020' },
  { company: 'knelf', role: 'software developer', duration: '2014 - 2016' },
  { company: 'evoco / itfordev', role: 'software developer', duration: '2013 - 2014' },
  { company: 'cgi', role: 'software developer', duration: '2011 - 2013' },
  { company: 'rogers', role: 'sales consultant', duration: '2008 - 2011' },
];

export function getCurrentJobs(): Job[] {
  return jobs.filter((j) => j.duration.includes('current'));
}

export function getPastJobs(): Job[] {
  return jobs.filter((j) => !j.duration.includes('current'));
}
