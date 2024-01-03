import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from '../config/types';
import ScreenWrapper from '../components/common/ScreenWrapper';
import BackButton from '../components/common/BackButton';
import {colors} from '../config/constants';
import {sampleCategories} from '../config/data';
import Loading from '../components/common/Loading';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'AddExpense'>;

export default function AddExpenseScreen({route, navigation}: Props) {
  let {id} = route.params;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddExpense = async () => {
    if (title && amount && category) {
      // good to go
      console.log(id);
      navigation.goBack();
    } else {
      // show error
      setLoading(false);
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>

            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Add Expense
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-56 w-56"
              source={require('../assets/expenseBanner.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              value={title}
              onChangeText={value => setTitle(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={value => setAmount(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Category</Text>
            <View className="flex-row flex-wrap items-center">
              {sampleCategories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.value === category) {
                  bgColor = 'bg-green-200';
                }
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        <View>
          {loading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleAddExpense}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Add Expense
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
