/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getUserQuiz = /* GraphQL */ `
  query GetUserQuiz($id: ID!) {
    getUserQuiz(id: $id) {
      id
      assetType
      createdAt
      userId
      user {
        id
        userType
        updatedAt
        email
        familyId
        companyId
        firstName
        lastName
        phone
        address
        gender
        dob
        school
        grade
        notes
        customerId
        relation
        status
        parentId
        createdAt
      }
      familyId
      companyId
      quizId
      quiz {
        id
        assetType
        createdAt
        title
        type
        alias
        summary
        description
        courseId
        time
        updatedAt
      }
      userQuizAnswers(limit: 500) {
        items {
          userQuizId
          questionId
          id
          companyId
          familyId
          createdAt
          userId
          quizId
          sectionId
          time
          answer
          flagged
          orderId
          reviewStartedAt
          reviewFinishedAt
          reviewFeedback
          review
          updatedAt
        }
      }
      startedAt
      finishedAt
      expiresAt
      status
      time
      total
      correct
      incorrect
      unattempted
      userAnswer
      score {
        raw
        converted
        percentile
        sections
        range
      }
      subScores
      sections {
        id
        title
        status
        orderId
        startedAt
        finishedAt
      }
      updatedAt
    }
  }
`;
export const getUserQuizForStartedAt = /* GraphQL */ `
  query GetUserQuiz($id: ID!) {
    getUserQuiz(id: $id) {
      id
      assetType
      createdAt
      userId
      quizId
      startedAt
      finishedAt
      expiresAt
      status
      time
      total
      correct
      incorrect
      unattempted
      userAnswer
      tagResult
      subScores
      sections {
        id
        title
        status
        orderId
        startedAt
        finishedAt
      }
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
        quiz {
          id
          assetType
          createdAt
          title
          type
          alias
          summary
          description
          courseId
          time
          sections {
            items {
              id
              assetType
              createdAt
              title
              summary
              description
              quizId
              time
              questions {
                items {
                  id
                  assetType
                  createdAt
                  title
                  summary
                  description
                  passageId
                  sectionId
                  quizId
                  time
                  orderId
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        startedAt
        finishedAt
        expiresAt
        userPackageId
        status
        time
        total
        correct
        incorrect
        unattempted
        userAnswer
        score {
          raw
          converted
          percentile
          sections
          range
        }
        tagResult
        updatedAt
      }
      nextToken
    }
  }
`;

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
     getUser(id: $id) {
      id
      userType
      updatedAt
      email
      familyId
      companyId
      firstName
      lastName
      phone
      address
      gender
      dob
      school
      grade
      notes
      customerId
      relation
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
        questions {
          items {
            id
            assetType
            createdAt
            sectionId
            quizId
            orderId
            updatedAt
          }
          nextToken
        }
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
          rationale
        }
        title
        summary
        description
        passageId
        passage {
          id
          assetType
          direction
          attribution
          body
          quizId
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
  query ListPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        packageItems {
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
              alias
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

export const listStudentsByParent = /* GraphQL */ `
  query ListStudentsByParent(
    $parentId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentsByParent(
      parentId: $parentId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;

export const listStudentsByFamily = /* GraphQL */ `
  query ListStudentsByFamily(
    $familyId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentsByFamily(
      familyId: $familyId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userType
        updatedAt
        email
        familyId
        companyId
        firstName
        lastName
        phone
        address
        gender
        dob
        school
        grade
        notes
        customerId
        relation
        status
        parentId
        createdAt
      }
      nextToken
    }
  }
`;

export const listUserCartItems = /* GraphQL */ `
  query ListUserCartItems(
    $userId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCartItems(
      userId: $userId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updatedAt
        packageId
        userId
        studentId
        student {
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
        package {
          id
          title
          alias
          summary
          description
          category
          status
          image
          price
          duration
          createdAt
          updatedAt
        }
        createdAt
      }
    }
  }
`;

export const listUserTransactions = /* GraphQL */ `
  query ListUserTransactions(
    $userId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTransactions(
      userId: $userId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updatedAt
        userId
        assetType
        amount
        couponId
        orderId
        quantity
        squareResponse
        createdAt
      }
      nextToken
    }
  }
`;

export const listUserPackages = /* GraphQL */ `
  query ListUserPackages(
    $userId: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelUserPackageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserPackages(
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
        updatedAt
        packageId
        package {
          id
          title
          alias
          summary
          description
          category
          status
          image
          price
          duration
          createdAt
          updatedAt
        }
        assetType
        studentId
        student {
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
        transactionId
        expiresAt
        createdAt
      }
      nextToken
    }
  }
`;

export const listStudentPackages = /* GraphQL */ `
  query ListStudentPackages(
    $studentId: ID!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentPackages(
      studentId: $studentId
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        id
        updatedAt
        packageId
        package {
          id
          title
          alias
          summary
          description
          category
          status
          image
          price
          duration
          createdAt
          updatedAt
        }
        assetType
        studentId
        student {
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
        transactionId
        expiresAt
        createdAt
      }
      nextToken
    }
  }
`;

export const listUserQuizzesByUserPackageId = /* GraphQL */ `
  query ListUserQuizzesByUserPackageId(
    $userPackageId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuizzesByUserPackageId(
      userPackageId: $userPackageId
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
        quiz {
          id
          assetType
          createdAt
          title
          type
          alias
          summary
          description
          courseId
          time
          sections {
            items {
              id
              assetType
              createdAt
              title
              summary
              description
              quizId
              time
              orderId
              questions {
                items {
                  id
                  assetType
                  createdAt
                  title
                  summary
                  description
                  passageId
                  sectionId
                  quizId
                  time
                  orderId
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        startedAt
        finishedAt
        expiresAt
        userPackageId
        status
        time
        total
        correct
        incorrect
        unattempted
        userAnswer
        score {
          raw
          converted
          percentile
          sections
          range
        }
        tagResult
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
      question {
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
      id
      companyId
      familyId
      createdAt
      userId
      quizId
      sectionId
      time
      answer
      correct
      flagged
      orderId
      reviewStartedAt
      reviewFinishedAt
      reviewFeedback
      review
      updatedAt
    }
  }`;