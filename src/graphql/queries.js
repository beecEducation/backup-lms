/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userType
      id
      updatedAt
      email
      firstName
      lastName
      phone
      address
      dob
      school
      grade
      customerId
      status
      parentId
      createdAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userType: UserType
    $id: ModelIDKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userType: $userType
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userType
        id
        email
        name
        gender
        dob
        school
        courses {
          nextToken
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCourse = /* GraphQL */ `
  query GetUserCourse($userId: ID!, $id: ID!) {
    getUserCourse(userId: $userId, id: $id) {
      userId
      id
      course {
        id
        assetType
        companyId
        title
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
      }
      assetType
      createdAt
      updatedAt
    }
  }
`;
export const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $userId: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserCourses(
      userId: $userId
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        id
        course {
          id
          assetType
          companyId
          title
          createdAt
          updatedAt
        }
        assetType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      assetType
      companyId
      title
      quizzes {
        items {
          id
          assetType
          createdAt
          title
          summary
          description
          courseId
          time
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        companyId
        title
        quizzes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      assetType
      createdAt
      title
      summary
      description
      courseId
      time
      updatedAt
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        createdAt
        title
        summary
        description
        courseId
        time
        updatedAt
      }
      nextToken
    }
  }
`;
export const listQuizzesByCourseId = /* GraphQL */ `
  query ListQuizzesByCourseId(
    $courseId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzesByCourseId(
      courseId: $courseId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        createdAt
        title
        summary
        description
        courseId
        time
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuizSection = /* GraphQL */ `
  query GetQuizSection($id: ID!) {
    getQuizSection(id: $id) {
      id
      assetType
      createdAt
      title
      summary
      description
      quizId
      time
      updatedAt
    }
  }
`;
export const listQuizSections = /* GraphQL */ `
  query ListQuizSections(
    $filter: ModelQuizSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        createdAt
        title
        summary
        description
        quizId
        time
        updatedAt
      }
      nextToken
    }
  }
`;
export const listQuizSectionsByQuizId = /* GraphQL */ `
  query ListQuizSectionsByQuizId(
    $quizId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuizSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizSectionsByQuizId(
      quizId: $quizId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        createdAt
        title
        summary
        description
        quizId
        time
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      assetType
      createdAt
      answer {
        answerType
        choices
        isCorrect
        rationale
      }
      title
      summary
      description
      passageId
      passage {
        id
        assetType
        createdAt
        direction
        attribution
        body
        quizId
        updatedAt
      }
      sectionId
      quizId
      time
      orderId
      tags {
        id
        assetType
        userId
        title
        tagType
        parent
        parentId
        level
        isGlobal
        companyId
        details
        ancestors {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        descendants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        createdAt
        answer {
          answerType
          choices
          isCorrect
          rationale
        }
        title
        summary
        description
        passageId
        passage {
          id
          assetType
          createdAt
          direction
          attribution
          body
          quizId
          updatedAt
        }
        sectionId
        quizId
        time
        orderId
        tags {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const listQuestionsBySectionId = /* GraphQL */ `
  query ListQuestionsBySectionId(
    $sectionId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionsBySectionId(
      sectionId: $sectionId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        createdAt
        answer {
          answerType
          choices
          isCorrect
          rationale
        }
        title
        summary
        description
        passageId
        passage {
          id
          assetType
          createdAt
          direction
          attribution
          body
          quizId
          updatedAt
        }
        sectionId
        quizId
        time
        orderId
        tags {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPassage = /* GraphQL */ `
  query GetPassage($id: ID!) {
    getPassage(id: $id) {
      id
      assetType
      createdAt
      direction
      attribution
      body
      quizId
      updatedAt
    }
  }
`;
export const listPassages = /* GraphQL */ `
  query ListPassages(
    $filter: ModelPassageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        createdAt
        direction
        attribution
        body
        quizId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPassagesByQuizId = /* GraphQL */ `
  query ListPassagesByQuizId(
    $quizId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPassageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassagesByQuizId(
      quizId: $quizId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        createdAt
        direction
        attribution
        body
        quizId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserQuiz = /* GraphQL */ `
  query GetUserQuiz($id: ID!) {
    getUserQuiz(id: $id) {
      id
      assetType
      createdAt
      userId
      quizId
      startedAt
      finishedAt
      status
      time
      total
      correct
      incorrect
      updatedAt
    }
  }
`;
export const listUserQuizs = /* GraphQL */ `
  query ListUserQuizs(
    $filter: ModelUserQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        createdAt
        userId
        quizId
        startedAt
        finishedAt
        status
        time
        total
        correct
        incorrect
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserQuizzesByUserId = /* GraphQL */ `
  query ListUserQuizzesByUserId(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuizzesByUserId(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        createdAt
        userId
        quizId
        startedAt
        finishedAt
        status
        time
        total
        correct
        incorrect
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserQuizAnswer = /* GraphQL */ `
  query GetUserQuizAnswer($userQuizId: ID!, $questionId: ID!) {
    getUserQuizAnswer(userQuizId: $userQuizId, questionId: $questionId) {
      userQuizId
      questionId
      id
      createdAt
      userId
      quizId
      sectionId
      time
      answer
      correct
      updatedAt
    }
  }
`;
export const listUserQuizAnswers = /* GraphQL */ `
  query ListUserQuizAnswers(
    $userQuizId: ID
    $questionId: ModelIDKeyConditionInput
    $filter: ModelUserQuizAnswerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserQuizAnswers(
      userQuizId: $userQuizId
      questionId: $questionId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userQuizId
        questionId
        id
        createdAt
        userId
        quizId
        sectionId
        time
        answer
        correct
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      assetType
      userId
      title
      tagType
      parent
      parentId
      level
      isGlobal
      companyId
      details
      ancestors {
        id
        assetType
        userId
        title
        tagType
        parent
        parentId
        level
        isGlobal
        companyId
        details
        ancestors {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        descendants {
          nextToken
        }
        createdAt
        updatedAt
      }
      descendants {
        items {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetType
        userId
        title
        tagType
        parent
        parentId
        level
        isGlobal
        companyId
        details
        ancestors {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        descendants {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTagsByParentId = /* GraphQL */ `
  query ListTagsByParentId(
    $parentId: ID!
    $parent: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagsByParentId(
      parentId: $parentId
      parent: $parent
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetType
        userId
        title
        tagType
        parent
        parentId
        level
        isGlobal
        companyId
        details
        ancestors {
          id
          assetType
          userId
          title
          tagType
          parent
          parentId
          level
          isGlobal
          companyId
          details
          createdAt
          updatedAt
        }
        descendants {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPackages = /* GraphQL */ `
  query ListPackages($limit: Int, $nextToken: String) {
    listPackages(limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        summary
        description
        category
        status
        image
        price
        duration
        items {
          items {
            packageId
            id
            itemId
            itemType
            count
            quiz {
              id
              assetType
              createdAt
              title
              summary
              description
              courseId
              time
              updatedAt
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;