import React from 'react';

export const Comment = () => {
    const { readComment, commentsArr, deleteComment, deleteAllComment } =useContext(commentcontext);
    useEffect(() => {
        readComment();
      }, []);
    return (
        <>
           {commentsArr
                  ? commentsArr.map(item => {
                      if (item.card == id) {
                        if (item.user === user.email) {
                          return (
                            <Card
                            >
                              <br />
                              <Typography marginLeft={1}>
                                Добавлено в {item.hour}:{item.minute}
                              </Typography>
                              <Typography
                                marginLeft={1}
                                style={{ height: "auto" }}>
                                Имя: {item.user}
                              </Typography>
                              <Typography marginLeft={1}>
                                Коментарий: {item.comment}
                              </Typography>
                              <br />{" "}
                              <Button onClick={() => deleteComment(item.id)}>
                                Удалить
                              </Button>
                            </Card>
                          );
                        }
                        return (
                          <Card
                            className="Com"
                          >
                            <br />
                            <Typography marginLeft={1}>
                              Добавлено в {item.hour}:{item.minute}
                            </Typography>
                            <Typography
                              marginLeft={1}
                              style={{ height: "auto" }}>
                              Имя: {item.user}
                            </Typography>
                            <Typography marginLeft={1}>
                              Коментарий: {item.comment}
                            </Typography>
                            <br />
                          </Card>
                        );
                      }
                    })
                  : null} 
        </>
    );
};
