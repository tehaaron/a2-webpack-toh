export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 1, title: 'Job 1', description: 'Job Description 1', status: 'open' },
      { id: 2, title: 'Job 2', description: 'Job Description 2', status: 'closed' },
      { id: 3, title: 'Job 3', description: 'Job Description 3', status: 'in progress' },
      { id: 4, title: 'Job 4', description: 'Job Description 4', status: 'open' },
      { id: 5, title: 'Job 5', description: 'Job Description 5', status: 'claimed' },
      { id: 6, title: 'Job 6', description: 'Job Description 6', status: 'closed' },
      { id: 7, title: 'Job 7', description: 'Job Description 7', status: 'open' },
      { id: 8, title: 'Job 8', description: 'Job Description 8', status: 'open' },
      { id: 9, title: 'Job 9', description: 'Job Description 9', status: 'in progress' },
      { id: 10, title: 'Job 10', description: 'Job Description 10', status: 'open' },
    ];
    return { heroes };
  }
}
