import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackNavigationParams, ExpenseItem} from '../config/types';
import ScreenWrapper from '../components/common/ScreenWrapper';
import BackButton from '../components/common/BackButton';
import {colors} from '../config/constants';
import ExpenseCard from '../components/common/ExpenseCard';
import EmptyList from '../components/trips/EmptyList';
import {sampleExpenseItems} from '../config/data';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'TripExpenses'>;

export default function TripExpensesScreen({navigation, route}: Props) {
  const {id, city, country} = route.params;
  const isFocused = useIsFocused();
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);

  const fetchExpenses = async () => {
    setExpenses([]);
    setExpenses(sampleExpenseItems);
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

  return (
    <ScreenWrapper>
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0 z-10">
            <BackButton />
          </View>

          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              {city}
            </Text>
            <Text className={`${colors.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image source={require('../assets/7.png')} className="w-80 h-80" />
        </View>

        <View className=" space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddExpense', {id, city, country})
              }
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dropBox}>
            <FlatList
              data={expenses}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  dropBox: {
    height: 420,
  },
});
