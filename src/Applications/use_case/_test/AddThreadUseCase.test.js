const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */

    // Arrange
    const mockThreadRepository = new ThreadRepository();
    const mockReturnAddedRepository = {
      id: 'thread-123',
      title: 'title',
      owner: 'user-123',
    };

    mockThreadRepository.addThread = jest.fn(() => Promise.resolve(mockReturnAddedRepository));

    const useCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    const useCasePayload = {
      title: 'title',
      body: 'body',
      owner: 'user-123',
    };

    const expectedAddedThread = {
      id: 'thread-123',
      title: 'title',
      owner: 'owner',
    };

    // Action
    const addedThread = await useCase.execute(useCasePayload);

    // Assert
    expect(addedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(useCasePayload);
  });
});
