import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './questionScreen.styles';
import axios from 'axios';

//------------------------shuffle arr-----------------
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//-------------done shuffle arr---------------

//-----------------------QS screen-----------------
const QuestionScreen = () => {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [all, setAll] = useState([]);
  const [choose, setChoose] = useState(false);
  const [indexC, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  //-----------------------get API---------------------------
  const getData = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple',
      )
      .then((response) => {
        //console.log('abc', response);
        var all = [],
          listAnswerCorrect = [];
        for (let i = 0; i < response.data.results.length; i++) {
          listAnswerCorrect = listAnswerCorrect.concat(
            response.data.results[i].correct_answer,
          );
          all = all.concat(
            response.data.results[i].question,
            shuffle(
              response.data.results[i].incorrect_answers.concat(
                response.data.results[i].correct_answer,
              ),
            ),
          );

          // return allAnswer;
        }
        setCorrectAnswer(listAnswerCorrect);
        setAll(all);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //-----------------------done get API---------------------------

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index % 5 === 0 ? (
          <Text style={styles.txtQues}>{`${
            index.toString() / 5 + 1
          }. ${item}`}</Text>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIndex(index);
              setChoose(true);
              //console.log(item);
            }}>
            {index === indexC ? (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'black',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            <Text style={styles.textAns}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {start && (
        <View>
          <Text style={styles.ques}>{'Bắt đầu làm đề?'}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getData();
              setStart(false);
            }}>
            <Text style={styles.textbtn}>{'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {!start && (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('aaa')}>
          <Text style={styles.btnText}>{'Submit'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export function QuestionHis() {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [all, setAll] = useState([]);
  const [choose, setChoose] = useState(false);
  const [indexC, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  //-----------------------get API---------------------------
  const getData = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple',
      )
      .then((response) => {
        // console.log('abc', response);
        var all = [],
          listAnswerCorrect = [];
        for (let i = 0; i < response.data.results.length; i++) {
          listAnswerCorrect = listAnswerCorrect.concat(
            response.data.results[i].correct_answer,
          );
          all = all.concat(
            response.data.results[i].question,
            shuffle(
              response.data.results[i].incorrect_answers.concat(
                response.data.results[i].correct_answer,
              ),
            ),
          );

          // return allAnswer;
        }
        setCorrectAnswer(listAnswerCorrect);
        setAll(all);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index % 5 === 0 ? (
          <Text style={styles.txtQues}>{`${
            index.toString() / 5 + 1
          }. ${item}`}</Text>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIndex(index);
              setChoose(true);
              // console.log(item);
            }}>
            {index === indexC ? (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'black',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            <Text style={styles.textAns}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {start && (
        <View>
          <Text style={styles.ques}>{'Bắt đầu làm đề?'}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getData();
              setStart(false);
            }}>
            <Text style={styles.textbtn}>{'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {!start && (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('aaa')}>
          <Text style={styles.btnText}>{'Submit'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function QuestionArt() {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [all, setAll] = useState([]);
  const [choose, setChoose] = useState(false);
  const [indexC, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  //-----------------------get API---------------------------
  const getData = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=25&difficulty=medium&type=multiple',
      )
      .then((response) => {
        // console.log('abc', response);
        var all = [],
          listAnswerCorrect = [];
        for (let i = 0; i < response.data.results.length; i++) {
          listAnswerCorrect = listAnswerCorrect.concat(
            response.data.results[i].correct_answer,
          );
          all = all.concat(
            response.data.results[i].question,
            shuffle(
              response.data.results[i].incorrect_answers.concat(
                response.data.results[i].correct_answer,
              ),
            ),
          );

          // return allAnswer;
        }
        setCorrectAnswer(listAnswerCorrect);
        setAll(all);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index % 5 === 0 ? (
          <Text style={styles.txtQues}>{`${
            index.toString() / 5 + 1
          }. ${item}`}</Text>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIndex(index);
              setChoose(true);
              //console.log(item);
            }}>
            {index === indexC ? (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'black',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            <Text style={styles.textAns}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {start && (
        <View>
          <Text style={styles.ques}>{'Bắt đầu làm đề?'}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getData();
              setStart(false);
            }}>
            <Text style={styles.textbtn}>{'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {!start && (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('aaa')}>
          <Text style={styles.btnText}>{'Submit'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function QuestionGeo() {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [all, setAll] = useState([]);
  const [choose, setChoose] = useState(false);
  const [indexC, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  //-----------------------get API---------------------------
  const getData = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple',
      )
      .then((response) => {
        //console.log('abc', response);
        var all = [],
          listAnswerCorrect = [];
        for (let i = 0; i < response.data.results.length; i++) {
          listAnswerCorrect = listAnswerCorrect.concat(
            response.data.results[i].correct_answer,
          );
          all = all.concat(
            response.data.results[i].question,
            shuffle(
              response.data.results[i].incorrect_answers.concat(
                response.data.results[i].correct_answer,
              ),
            ),
          );

          // return allAnswer;
        }
        setCorrectAnswer(listAnswerCorrect);
        setAll(all);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index % 5 === 0 ? (
          <Text style={styles.txtQues}>{`${
            index.toString() / 5 + 1
          }. ${item}`}</Text>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIndex(index);
              setChoose(true);
              //console.log(item);
            }}>
            {index === indexC ? (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'black',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            <Text style={styles.textAns}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {start && (
        <View>
          <Text style={styles.ques}>{'Bắt đầu làm đề?'}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getData();
              setStart(false);
            }}>
            <Text style={styles.textbtn}>{'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {!start && (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('aaa')}>
          <Text style={styles.btnText}>{'Submit'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export function QuestionComputer() {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [all, setAll] = useState([]);
  const [choose, setChoose] = useState(false);
  const [indexC, setIndex] = useState(0);
  const [start, setStart] = useState(true);

  //-----------------------get API---------------------------
  const getData = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple',
      )
      .then((response) => {
        //console.log('abc', response);
        var all = [],
          listAnswerCorrect = [];
        for (let i = 0; i < response.data.results.length; i++) {
          listAnswerCorrect = listAnswerCorrect.concat(
            response.data.results[i].correct_answer,
          );
          all = all.concat(
            response.data.results[i].question,
            shuffle(
              response.data.results[i].incorrect_answers.concat(
                response.data.results[i].correct_answer,
              ),
            ),
          );

          // return allAnswer;
        }
        setCorrectAnswer(listAnswerCorrect);
        setAll(all);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index % 5 === 0 ? (
          <Text style={styles.txtQues}>{`${
            index.toString() / 5 + 1
          }. ${item}`}</Text>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIndex(index);
              setChoose(true);
              //console.log(item);
            }}>
            {index === indexC ? (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'black',
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            <Text style={styles.textAns}>{item}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {start && (
        <View>
          <Text style={styles.ques}>{'Bắt đầu làm đề?'}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              getData();
              setStart(false);
            }}>
            <Text style={styles.textbtn}>{'Start'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={all}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {!start && (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('aaa')}>
          <Text style={styles.btnText}>{'Submit'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default QuestionScreen;
