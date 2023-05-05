/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserCourse = /* GraphQL */ `
  subscription OnCreateUserCourse($userId: String) {
    onCreateUserCourse(userId: $userId) {
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
      assetType {
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
        assetType {
          userId
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCourse = /* GraphQL */ `
  subscription OnUpdateUserCourse($userId: String) {
    onUpdateUserCourse(userId: $userId) {
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
      assetType {
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
        assetType {
          userId
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCourse = /* GraphQL */ `
  subscription OnDeleteUserCourse($userId: String) {
    onDeleteUserCourse(userId: $userId) {
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
      assetType {
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
        assetType {
          userId
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
export const onCreateQuizSection = /* GraphQL */ `
  subscription OnCreateQuizSection {
    onCreateQuizSection {
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
export const onUpdateQuizSection = /* GraphQL */ `
  subscription OnUpdateQuizSection {
    onUpdateQuizSection {
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
export const onDeleteQuizSection = /* GraphQL */ `
  subscription OnDeleteQuizSection {
    onDeleteQuizSection {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
