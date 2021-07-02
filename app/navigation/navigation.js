import React, {createRef} from 'react';
import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

export function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function toggleDrawer() {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}
export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}
