/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserQuiz = /* GraphQL */ `
  mutation CreateUserQuiz($userId: ID!, $quizId: ID!) {
    createUserQuiz(userId: $userId, quizId: $quizId)
  }
`;
export const updateUserQuiz = /* GraphQL */ `
  mutation UpdateUserQuiz($id: ID!, $userId: ID!, $status: UserQuizStatus!) {
    updateUserQuiz(id: $id, userId: $userId, status: $status)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userType
      id
      email
      name
      gender
      dob
      school
      courses {
        items {
          userId
          id
          assetType
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userType
      id
      email
      name
      gender
      dob
      school
      courses {
        items {
          userId
          id
          assetType
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userType
      id
      email
      name
      gender
      dob
      school
      courses {
        items {
          userId
          id
          assetType
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const createUserCourse = /* GraphQL */ `
  mutation CreateUserCourse(
    $input: CreateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    createUserCourse(input: $input, condition: $condition) {
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
export const updateUserCourse = /* GraphQL */ `
  mutation UpdateUserCourse(
    $input: UpdateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    updateUserCourse(input: $input, condition: $condition) {
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
export const deleteUserCourse = /* GraphQL */ `
  mutation DeleteUserCourse(
    $input: DeleteUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    deleteUserCourse(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuizSection = /* GraphQL */ `
  mutation CreateQuizSection(
    $input: CreateQuizSectionInput!
    $condition: ModelQuizSectionConditionInput
  ) {
    createQuizSection(input: $input, condition: $condition) {
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
export const updateQuizSection = /* GraphQL */ `
  mutation UpdateQuizSection(
    $input: UpdateQuizSectionInput!
    $condition: ModelQuizSectionConditionInput
  ) {
    updateQuizSection(input: $input, condition: $condition) {
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
export const deleteQuizSection = /* GraphQL */ `
  mutation DeleteQuizSection(
    $input: DeleteQuizSectionInput!
    $condition: ModelQuizSectionConditionInput
  ) {
    deleteQuizSection(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createPassage = /* GraphQL */ `
  mutation CreatePassage(
    $input: CreatePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    createPassage(input: $input, condition: $condition) {
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
export const updatePassage = /* GraphQL */ `
  mutation UpdatePassage(
    $input: UpdatePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    updatePassage(input: $input, condition: $condition) {
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
export const deletePassage = /* GraphQL */ `
  mutation DeletePassage(
    $input: DeletePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    deletePassage(input: $input, condition: $condition) {
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
export const createUserQuizAnswer = /* GraphQL */ `
  mutation CreateUserQuizAnswer(
    $input: CreateUserQuizAnswerInput!
    $condition: ModelUserQuizAnswerConditionInput
  ) {
    createUserQuizAnswer(input: $input, condition: $condition) {
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
export const updateUserQuizAnswer = /* GraphQL */ `
  mutation UpdateUserQuizAnswer(
    $input: UpdateUserQuizAnswerInput!
    $condition: ModelUserQuizAnswerConditionInput
  ) {
    updateUserQuizAnswer(input: $input, condition: $condition) {
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
export const deleteUserQuizAnswer = /* GraphQL */ `
  mutation DeleteUserQuizAnswer(
    $input: DeleteUserQuizAnswerInput!
    $condition: ModelUserQuizAnswerConditionInput
  ) {
    deleteUserQuizAnswer(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const addUser = /* GraphQL */ `
  mutation AddUser($input: AddUserInput!, $mode: UserType!) {
    addUser(input: $input, mode: $mode)
  }
`;

export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
      id
      updatedAt
      packageId
      userId
      studentId
      createdAt
    }
  }
`;

export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
      id
      updatedAt
      packageId
      userId
      studentId
      createdAt
    }
  }
`;

export const verifyCoupon = /* GraphQL */ `
  mutation VerifyCoupon($input: VerifyCouponInput!) {
    verifyCoupon(input: $input)
  }
`;

export const checkout = /* GraphQL */ `
  mutation Checkout($input: CheckoutInput!) {
    checkout(input: $input)
  }
`;